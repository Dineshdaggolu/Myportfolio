import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function Admin() {
  const { data: contacts, isLoading, error } = useQuery({
    queryKey: ['/api/contacts'],
    queryFn: async (): Promise<Contact[]> => {
      const response = await fetch('/api/contacts');
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent-cyan mx-auto mb-4"></div>
          <p className="text-text-muted">Loading contacts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">Failed to load contacts</p>
          <p className="text-text-muted">Error: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-gradient">Contact Messages</h1>
            <Badge variant="secondary" className="text-sm">
              {contacts?.length || 0} messages
            </Badge>
          </div>

          {!contacts || contacts.length === 0 ? (
            <Card className="glass-morphism">
              <CardContent className="py-12 text-center">
                <p className="text-text-muted text-lg">No contact messages yet.</p>
                <p className="text-text-muted">Messages will appear here when people contact you through your portfolio.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-morphism hover:bg-secondary-dark/30 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-text-light text-lg mb-1">
                            {contact.subject}
                          </CardTitle>
                          <div className="flex items-center gap-4 text-sm text-text-muted">
                            <span className="font-medium text-accent-cyan">{contact.name}</span>
                            <span>{contact.email}</span>
                            <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-light leading-relaxed">
                        {contact.message}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}