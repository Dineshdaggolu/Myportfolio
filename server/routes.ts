import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactSchema } from "@shared/schema";
import { storage } from "./storage";
import { sendEmail, createContactNotificationEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // Save contact to database
      const savedContact = await storage.createContact(contactData);
      console.log("Contact form submission saved:", savedContact);
      
      // Send email notification to you
      try {
        const emailContent = createContactNotificationEmail(savedContact);
        const emailSent = await sendEmail({
          to: "daggoludinesh@gmail.com", // Your email address
          from: "daggoludinesh@gmail.com", // Use your verified email as sender
          subject: `🚀 New Portfolio Contact: ${savedContact.subject}`,
          text: emailContent.text,
          html: emailContent.html
        });
        
        if (emailSent) {
          console.log("Email notification sent successfully");
        } else {
          console.log("Failed to send email notification");
        }
      } catch (emailError) {
        console.error("Email sending error:", emailError);
        // Don't fail the contact form if email fails
      }
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon.",
        contact: savedContact
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Something went wrong. Please try again later." 
        });
      }
    }
  });

  // Get all contacts endpoint (for admin use)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
