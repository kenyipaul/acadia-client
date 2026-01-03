"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Server,
  Cpu,
  HardDrive,
  Activity,
  Database,
  Wifi,
  Users,
  Clock,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  Download
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState } from "react";

// Mock data for CPU usage over time
const cpuData = [
  { time: "00:00", usage: 45 },
  { time: "04:00", usage: 32 },
  { time: "08:00", usage: 68 },
  { time: "12:00", usage: 78 },
  { time: "16:00", usage: 85 },
  { time: "20:00", usage: 62 },
  { time: "23:59", usage: 48 },
];

// Mock data for memory usage over time
const memoryData = [
  { time: "00:00", used: 6.2, available: 9.8 },
  { time: "04:00", used: 5.8, available: 10.2 },
  { time: "08:00", used: 8.4, available: 7.6 },
  { time: "12:00", used: 9.8, available: 6.2 },
  { time: "16:00", used: 10.5, available: 5.5 },
  { time: "20:00", used: 8.9, available: 7.1 },
  { time: "23:59", used: 7.2, available: 8.8 },
];

// Mock data for network traffic
const networkData = [
  { time: "00:00", upload: 12, download: 45 },
  { time: "04:00", upload: 8, download: 28 },
  { time: "08:00", upload: 35, download: 120 },
  { time: "12:00", upload: 48, download: 156 },
  { time: "16:00", upload: 52, download: 168 },
  { time: "20:00", upload: 38, download: 98 },
  { time: "23:59", upload: 18, download: 52 },
];

// Mock data for database queries
const databaseData = [
  { time: "00:00", queries: 245 },
  { time: "04:00", queries: 156 },
  { time: "08:00", queries: 892 },
  { time: "12:00", queries: 1245 },
  { time: "16:00", queries: 1568 },
  { time: "20:00", queries: 985 },
  { time: "23:59", queries: 432 },
];

// Mock recent system events
const systemEvents = [
  { time: "2 minutes ago", type: "info", message: "Database backup completed successfully" },
  { time: "15 minutes ago", type: "warning", message: "High memory usage detected (85%)" },
  { time: "1 hour ago", type: "success", message: "System health check passed" },
  { time: "2 hours ago", type: "info", message: "SSL certificate renewed" },
  { time: "3 hours ago", type: "success", message: "User session cleanup completed" },
  { time: "5 hours ago", type: "warning", message: "Disk space below 20% threshold" },
];

// Mock active services
const services = [
  { name: "Web Server", status: "running", uptime: "45d 12h", cpu: "15%", memory: "2.1 GB" },
  { name: "Database Server", status: "running", uptime: "45d 12h", cpu: "28%", memory: "4.8 GB" },
  { name: "API Gateway", status: "running", uptime: "45d 12h", cpu: "8%", memory: "1.2 GB" },
  { name: "Cache Server", status: "running", uptime: "45d 12h", cpu: "5%", memory: "3.6 GB" },
  { name: "Background Jobs", status: "running", uptime: "45d 12h", cpu: "12%", memory: "0.8 GB" },
  { name: "Email Service", status: "running", uptime: "45d 12h", cpu: "3%", memory: "0.4 GB" },
];

export default function ServerStats() {
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const handleRefresh = () => {
    setLastUpdate(new Date());
  };

  const getStatusBadge = (type: string) => {
    switch (type) {
      case "success":
        return <Badge className="bg-green-100 text-green-800">Success</Badge>;
      case "warning":
        return <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>;
      case "error":
        return <Badge className="bg-red-100 text-red-800">Error</Badge>;
      default:
        return <Badge className="bg-blue-100 text-blue-800">Info</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6 @container">
      {/* Header */}
      <div className="gap-5 flex items-center justify-between flex-wrap">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            Server Statistics
          </h1>
          <p className="text-gray-600 mt-1">
            Real-time monitoring and system performance metrics
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs text-gray-500">Last Updated</p>
            <p className="text-sm text-gray-900">{lastUpdate.toLocaleTimeString()}</p>
          </div>
          <button onClick={handleRefresh} className="flex items-center text-nowrap rounded-full border border-gray-400 text-gray-700 p-3 px-5 cursor-pointer">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </button>
          <button className="flex items-center text-nowrap rounded-full bg-red-theme-100 text-red-theme-500 border border-red-theme-100 p-3 px-5 cursor-pointer hover:bg-red-theme-500 hover:text-white">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* System Health Overview */}
      <div className="grid grid-cols-1 @md:grid-cols-2 @4xl:grid-cols-3 @4xl:grid-cols-4 gap-4 rounded-2xl">
        <div className="bg-white p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6 text-purple-600" />
            </div>
            <Badge className="bg-green-100 text-green-800">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              Healthy
            </Badge>
          </div>
          <h3 className="text-gray-600 mb-1">CPU Usage</h3>
          <p className="text-gray-900 mb-2">48.5%</p>
          <Progress value={48.5} className="h-2" />
          <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
            <TrendingDown className="w-3 h-3 text-green-600" />
            12% lower than average
          </p>
        </div>

        <div className="bg-white p-7 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <Badge className="bg-yellow-100 text-yellow-800">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Warning
            </Badge>
          </div>
          <h3 className="text-gray-600 mb-1">Memory Usage</h3>
          <p className="text-gray-900 mb-2">12.8 GB / 16 GB</p>
          <Progress value={80} className="h-2" />
          <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-red-600" />
            8% higher than average
          </p>
        </div>

        <div className="bg-white p-7 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <HardDrive className="w-6 h-6 text-green-600" />
            </div>
            <Badge className="bg-green-100 text-green-800">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              Healthy
            </Badge>
          </div>
          <h3 className="text-gray-600 mb-1">Disk Usage</h3>
          <p className="text-gray-900 mb-2">342 GB / 500 GB</p>
          <Progress value={68.4} className="h-2" />
          <p className="text-xs text-gray-500 mt-2">158 GB available</p>
        </div>

        <div className="bg-white p-7 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <Badge className="bg-green-100 text-green-800">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              Active
            </Badge>
          </div>
          <h3 className="text-gray-600 mb-1">Active Users</h3>
          <p className="text-gray-900 mb-2">284 users</p>
          <Progress value={56.8} className="h-2" />
          <p className="text-xs text-gray-500 mt-2">Peak: 500 concurrent users</p>
        </div>
      </div>

      {/* Server Uptime & Quick divts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="p-5 bg-white rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
              <Clock className="w-7 h-7 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-600">System Uptime</p>
              <p className="text-gray-900">45 days 12 hours</p>
              <p className="text-xs text-green-600">99.98% availability</p>
            </div>
          </div>
        </div>

        <div className="p-5 bg-white rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
              <Database className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600">Database Size</p>
              <p className="text-gray-900">128.4 GB</p>
              <p className="text-xs text-gray-500">1,245,678 records</p>
            </div>
          </div>
        </div>

        <div className="p-5 bg-white rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
              <Wifi className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600">Network Status</p>
              <p className="text-gray-900">168 Mbps</p>
              <p className="text-xs text-green-600">Excellent connection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Charts */}
      <Tabs defaultValue="cpu" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-[#eee] rounded-full p-2 h-auto">
          <TabsTrigger className="p-2 rounded-full cursor-pointer data-[state=active]:bg-white" value="cpu">CPU Performance</TabsTrigger>
          <TabsTrigger className="p-2 rounded-full cursor-pointer data-[state=active]:bg-white" value="memory">Memory Usage</TabsTrigger>
          <TabsTrigger className="p-2 rounded-full cursor-pointer data-[state=active]:bg-white" value="network">Network Traffic</TabsTrigger>
          <TabsTrigger className="p-2 rounded-full cursor-pointer data-[state=active]:bg-white" value="database">Database Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="cpu">
          <div className="bg-white p-5 rounded-2xl grid gap-2">
            <CardHeader>
              <CardTitle>CPU Usage (24 Hours)</CardTitle>
            </CardHeader>
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={cpuData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="usage"
                    name="CPU Usage (%)"
                    stroke="#9333ea"
                    fill="#e9d5ff"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="memory">
          <div className="bg-white p-5 rounded-2xl grid gap-2">
            <CardHeader>
              <CardTitle>Memory Usage (24 Hours)</CardTitle>
            </CardHeader>
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={memoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="used"
                    name="Used (GB)"
                    stroke="#2563eb"
                    fill="#bfdbfe"
                    stackId="1"
                  />
                  <Area
                    type="monotone"
                    dataKey="available"
                    name="Available (GB)"
                    stroke="#10b981"
                    fill="#d1fae5"
                    stackId="1"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="network">
          <div className="bg-white p-5 rounded-2xl grid gap-2">
            <CardHeader>
              <CardTitle>Network Traffic (24 Hours)</CardTitle>
            </CardHeader>
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={networkData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="upload"
                    name="Upload (Mbps)"
                    stroke="#f59e0b"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="download"
                    name="Download (Mbps)"
                    stroke="#10b981"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="database">
          <div className="bg-white p-5 rounded-2xl grid gap-2">
            <CardHeader>
              <CardTitle>Database Queries (24 Hours)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={databaseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="queries"
                    name="Queries per Hour"
                    fill="#2563eb"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </div>
        </TabsContent>
      </Tabs>

      {/* Services Status & System Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Active Services */}
        <div className="p-5 bg-white rounded-2xl grid gap-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">Recent System Events</h1>
              <Badge className="bg-green-100 text-green-800">
                {services.filter(s => s.status === "running").length}/{services.length} Running
              </Badge>
            </div>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${service.status === "running" ? "bg-green-500" : "bg-red-500"}`} />
                    <div>
                      <p className="text-gray-900">{service.name}</p>
                      <p className="text-xs text-gray-500">Uptime: {service.uptime}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600">CPU: {service.cpu}</p>
                    <p className="text-xs text-gray-600">RAM: {service.memory}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* System Events */}
        <div className="p-5 bg-white rounded-2xl grid gap-4">
          <h1 className="text-xl font-bold">Recent System Events</h1>
          <div className="space-y-3">
            {systemEvents.map((event, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="mt-1">
                  {getStatusBadge(event.type)}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{event.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
