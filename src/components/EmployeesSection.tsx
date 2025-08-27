import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

const EmployeesSection = () => {
  const employees = [
    {
      id: 1,
      name: 'Leif Reidar Syversen',
      role: 'Daglig leder',
      email: 'postmaster@torpmobel.no',
      phone: ['69 34 69 08', '911 62 578']
    },
    {
      id: 2,
      name: 'Marianne Holter Jensen',
      role: 'Interiørarkitekt',
      email: 'postmaster@torpmobel.no'
    }
  ];

  return (
    <section id="employees" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Vårt Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {employees.map((employee) => (
            <Card key={employee.id} className="group hover:shadow-elegant transition-smooth bg-card border-0 shadow-card">
              <CardContent className="p-6">
                {/* Employee Info */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-semibold text-primary mb-2">{employee.name}</h3>
                  <p className="text-accent text-lg font-medium mb-4">{employee.role}</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 text-base text-muted-foreground">
                  {employee.phone && employee.phone.map((number, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-2 text-accent" />
                      <span>{number}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2 text-accent" />
                    <span className="hover:text-accent transition-fast">
                      {employee.email}
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