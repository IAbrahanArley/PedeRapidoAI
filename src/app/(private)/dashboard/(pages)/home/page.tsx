"use client"
import React from 'react'
import { Bar, BarChart, CartesianGrid } from "recharts"

import { Avatar, AvatarFallback,AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

import DashboardLayout from '../../components/dashboard';
const Dashboard = () => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]
   
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig
  return (
    <DashboardLayout>

    <div className="flex min-h-screen text-white">
    <div className="flex-1 p-6">
       
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>$45,231.89</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Subscriptions</CardTitle>
            </CardHeader>
            <CardContent>+2,350</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sales</CardTitle>
            </CardHeader>
            <CardContent>+12,234</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active Now</CardTitle>
            </CardHeader>
            <CardContent>+573</CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white p-4 rounded-lg">
            <h2 className="text-lg text-black font-bold mb-4">Overview</h2>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg text-black font-bold mb-4">Recent Sales</h2>
            <div className="space-y-4">
              {["Olivia", "Jackson", "Isabella", "William", "Sofia"].map((name, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/avatar.png" />
                      <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                    <span className='text-black'>{name}</span>
                  </div>
                  <span className='text-black'>${(Math.random() * 2000).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
              </DashboardLayout>
  )
}

export default Dashboard;