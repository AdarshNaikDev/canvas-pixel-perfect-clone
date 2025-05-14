import React from 'react';
import { MainHeader } from '@/components/layout/MainHeader';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, FileText, Clock, ArrowRight } from 'lucide-react';

const Index = () => {
  const quickActions = [
    {
      title: "Schedule Appointment",
      description: "Book a consultation with our specialists",
      icon: <CalendarDays className="h-6 w-6" />,
      href: "#"
    },
    {
      title: "Medical Records",
      description: "View and download your health documents",
      icon: <FileText className="h-6 w-6" />,
      href: "#"
    },
    {
      title: "Recent Consultations",
      description: "Check your past appointments and notes",
      icon: <Clock className="h-6 w-6" />,
      href: "#"
    }
  ];

  const recentAppointments = [
    {
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      date: "March 15, 2024",
      time: "10:30 AM",
      status: "Completed"
    },
    {
      doctor: "Dr. Michael Chen",
      specialty: "Dermatology",
      date: "March 20, 2024",
      time: "2:15 PM",
      status: "Upcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainHeader />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-[#231F20] mb-2">Welcome Back, Ajmal</h1>
          <p className="text-muted-foreground">Manage your health records and appointments</p>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          {quickActions.map((action, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 text-primary">{action.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{action.title}</h2>
              <p className="text-muted-foreground mb-4">{action.description}</p>
              <Button variant="outline" className="w-full" asChild>
                <a href={action.href}>
                  Access <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>
          ))}
        </section>

        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#231F20]">Recent Appointments</h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {recentAppointments.map((appointment, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                    <p className="text-muted-foreground">{appointment.specialty}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    appointment.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {appointment.status}
                  </span>
                </div>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>{appointment.date}</span>
                  <span>{appointment.time}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
