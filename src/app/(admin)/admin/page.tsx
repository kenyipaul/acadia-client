"use client"
import { Activity } from 'react';
import * as Icon from '@/components/ui/icons'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

export default function Admin() {

  const recentActivities = [
    { id: 1, user: "Admin: Patricia Moore", action: "Created new admin account", target: "John Anderson", time: "10 minutes ago" },
    { id: 2, user: "Admin: James Wilson", action: "Modified system settings", target: "Email Configuration", time: "1 hour ago" },
    { id: 3, user: "Admin: Robert Chang", action: "Removed admin account", target: "Sarah Thompson", time: "3 hours ago" },
    { id: 4, user: "Admin: Patricia Moore", action: "Updated user permissions", target: "Headmaster Portal", time: "5 hours ago" },
    { id: 5, user: "Admin: James Wilson", action: "Created new admin account", target: "Michael Stevens", time: "1 day ago" },
  ];

  return (
    <main className="py-5 grid gap-5 @container">
      <section className='grid gap-5'>
        <div>
          <h1 className="text-3xl font-bold">System Administration</h1>
          <p className="text-gray-500">Oversee and manage the entire school management system</p>
        </div>
        <div className="grid gap-4 @sm:grid-cols-2 @4xl:grid-cols-4">
          <div className="bg-white rounded-2xl p-7 flex justify-between">
            <div className="grid gap-1">
              <p className="text-gray-600">Total Users</p>
              <h1 className="text-3xl font-bold">1,050</h1>
              <p className="text-sm text-gray-400">All system users</p>
              <p className="text-green-500">2% from last month</p>
            </div>
            <div className="size-15 rounded-2xl bg-blue-50 text-blue-400 flex items-center justify-center"><Icon.EmployeeIcon /></div>
          </div>
          <div className="bg-white rounded-2xl p-7 flex justify-between">
            <div className="grid gap-1">
              <p className="text-gray-600">Active Admins</p>
              <h1 className="text-3xl font-bold">5</h1>
              <p className="text-sm text-gray-400">Administrator accounts</p>
            </div>
            <div className="size-15 rounded-2xl bg-purple-50 text-purple-400 flex items-center justify-center"><Icon.AdminIcon /></div>
          </div>
          <div className="bg-white rounded-2xl p-7 flex justify-between">
            <div className="grid gap-1">
              <p className="text-gray-600">System Uptime</p>
              <h1 className="text-3xl font-bold">1h 30m</h1>
              <p className="text-sm text-gray-400">Last 30 days</p>
            </div>
            <div className="size-15 rounded-2xl bg-green-50 text-green-400 flex items-center justify-center"><Icon.PulseIcon /></div>
          </div>
          <div className="bg-white rounded-2xl p-7 flex justify-between">
            <div className="grid gap-1">
              <p className="text-gray-600">Active Sessions</p>
              <h1 className="text-3xl font-bold">234</h1>
              <p className="text-sm text-gray-400">Currently online</p>
              <p className="text-green-500">12% from yesterday</p>
            </div>
            <div className="size-15 rounded-2xl bg-orange-50 text-orange-400 flex items-center justify-center"><Icon.UserSettings /></div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className='p-7 bg-white rounded-2xl'>
          <h1 className='text-xl font-bold'>User Distribution by Role</h1>
          <RadarChart
            style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
            responsive
            outerRadius="80%"
            data={polar_data}
            margin={{
              top: 20,
              left: 20,
              right: 20,
              bottom: 20,
            }}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </div>

        <div className='p-7 grid gap-2 bg-white rounded-2xl'>
          <h1 className='text-xl font-bold'>System Activity Trends</h1>
          <LineChart
            style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </section>

      <section className='bg-white grid gap-4 rounded-2xl p-7 @container'>
        <h1 className='text-xl font-bold'>System Health Monitoring</h1>
        <div className='grid gap-3 @sm:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4'>
          <div className='border border-gray-200 rounded-xl p-3 px-4 grid gap-2'>
            <div className='flex items-center justify-between'>
              <p>API Response</p>
              <span className='text-green-500'><Icon.CheckIcon /></span>
            </div>
            <h1 className='text-3xl text-green-500 font-medium'>45ms</h1>
            <p className='bg-green-50 text-green-500 rounded-full p-2 px-3 text-sm w-fit'>Healthy</p>
          </div>
          <div className='border border-gray-200 rounded-xl p-3 px-4 grid gap-2'>
            <div className='flex items-center justify-between'>
              <p>Database</p>
              <span className='text-green-500'><Icon.CheckIcon /></span>
            </div>
            <h1 className='text-3xl text-green-500 font-medium'>99.9%</h1>
            <p className='bg-green-50 text-green-500 rounded-full p-2 px-3 text-sm w-fit'>Healthy</p>
          </div>
          <div className='border border-gray-200 rounded-xl p-3 px-4 grid gap-2'>
            <div className='flex items-center justify-between'>
              <p>Storage</p>
              <span className='text-orange-500'>
                <Icon.AlertIcon />
              </span>
            </div>
            <h1 className='text-3xl text-orange-500 font-medium'>78%</h1>
            <p className='bg-orange-50 text-orange-500 rounded-full p-2 px-3 text-sm w-fit'>Warning</p>
          </div>
          <div className='border border-gray-200 rounded-xl p-3 px-4 grid gap-2'>
            <div className='flex items-center justify-between'>
              <p>Active Sessions</p>
              <Icon.CheckIcon />
            </div>
            <h1 className='text-3xl text-green-500 font-medium'>234</h1>
            <p className='bg-green-50 text-green-500 rounded-full p-2 px-3 text-sm w-fit'>Healthy</p>
          </div>
        </div>
      </section>

      <section className='bg-white grid gap-4 rounded-2xl p-7 @container'>
        <div>
          <h1 className='text-xl font-bold'>Recent Admin Activities</h1>
        </div>
        <div>
          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 py-4 border-b border-gray-200">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-bold text-gray-900">{activity.user}</span>
                    <span className="text-gray-600"> {activity.action}: </span>
                    <span className="font-medium text-gray-900">{activity.target}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}


const data = [
  {
    name: 'JAN',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'FEB',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'MAR',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'APR',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'MAY',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'JUN',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  }
];


const polar_data = [
  {
    subject: 'Students',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Admins',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Teachers',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Staff',
    A: 99,
    B: 100,
    fullMark: 150,
  }
];
