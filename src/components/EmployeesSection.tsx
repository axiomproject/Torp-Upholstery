import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Mail, Phone } from 'lucide-react';

const EmployeesSection = () => {
  const employees = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      department: 'Executive',
      expertise: ['Leadership', 'Strategy', 'Operations'],
      email: 'sarah.johnson@company.com',
      phone: '+1 (555) 123-4567',
      bio: 'Sarah brings over 15 years of executive leadership experience, driving growth and innovation across multiple industries.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Director of Operations',
      department: 'Operations',
      expertise: ['Project Management', 'Process Optimization', 'Team Leadership'],
      email: 'michael.chen@company.com',
      phone: '+1 (555) 234-5678',
      bio: 'Michael specializes in streamlining operations and implementing efficient processes that drive organizational success.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Senior Business Analyst',
      department: 'Analytics',
      expertise: ['Data Analysis', 'Business Intelligence', 'Strategic Planning'],
      email: 'emily.rodriguez@company.com',
      phone: '+1 (555) 345-6789',
      bio: 'Emily transforms complex data into actionable insights, helping businesses make informed strategic decisions.'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Client Relations Manager',
      department: 'Client Services',
      expertise: ['Client Management', 'Relationship Building', 'Customer Success'],
      email: 'david.thompson@company.com',
      phone: '+1 (555) 456-7890',
      bio: 'David ensures exceptional client experiences through dedicated relationship management and personalized service delivery.'
    },
    {
      id: 5,
      name: 'Lisa Kim',
      role: 'Innovation Specialist',
      department: 'Innovation',
      expertise: ['Digital Transformation', 'Technology Integration', 'Change Management'],
      email: 'lisa.kim@company.com',
      phone: '+1 (555) 567-8901',
      bio: 'Lisa leads digital transformation initiatives, helping organizations adapt and thrive in the modern business landscape.'
    },
    {
      id: 6,
      name: 'Robert Martinez',
      role: 'Financial Advisor',
      department: 'Finance',
      expertise: ['Financial Planning', 'Risk Management', 'Investment Strategy'],
      email: 'robert.martinez@company.com',
      phone: '+1 (555) 678-9012',
      bio: 'Robert provides comprehensive financial guidance, helping clients achieve their long-term financial objectives.'
    }
  ];

  return (
    <section id="employees" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated professionals who drive our success and deliver exceptional results for our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {employees.map((employee) => (
            <Card key={employee.id} className="group hover:shadow-elegant transition-smooth bg-card border-0 shadow-card">
              <CardContent className="p-6">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  {employee.name.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Employee Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-primary mb-1">{employee.name}</h3>
                  <p className="text-accent font-medium mb-2">{employee.role}</p>
                  <Badge variant="secondary" className="mb-3">
                    {employee.department}
                  </Badge>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {employee.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {employee.expertise.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-accent" />
                    <span className="hover:text-accent transition-fast cursor-pointer">
                      {employee.email}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-accent" />
                    <span>{employee.phone}</span>
                  </div>
                  <div className="flex items-center pt-2">
                    <Linkedin className="w-4 h-4 mr-2 text-accent cursor-pointer hover:text-accent/80 transition-fast" />
                    <span className="text-accent cursor-pointer hover:text-accent/80 transition-fast">
                      Connect on LinkedIn
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeesSection;