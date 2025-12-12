"use client";
import * as Icon from "@/components/ui/icons";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Plus, Edit, Trash2, ChevronLeft, ChevronRight, BookOpen, GraduationCap, AlertCircle, Clock, CalendarDays, Download, Filter } from "lucide-react";

interface AcademicEvent {
	id: number;
	title: string;
	type: "term" | "exam" | "holiday" | "event" | "registration" | "meeting";
	startDate: string;
	endDate: string;
	description: string;
	color: string;
}

export default function AcademicCalendar() {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [showAddEventModal, setShowAddEventModal] = useState(false);
	const [selectedEventType, setSelectedEventType] = useState<string>("all");

	const academicEvents: AcademicEvent[] = [
		{
			id: 1,
			title: "Term 1",
			type: "term",
			startDate: "2025-01-06",
			endDate: "2025-04-11",
			description: "First term of academic year 2024/2025",
			color: "bg-blue-500",
		},
		{
			id: 2,
			title: "Mid-Term Break",
			type: "holiday",
			startDate: "2025-02-17",
			endDate: "2025-02-21",
			description: "Term 1 mid-term break",
			color: "bg-amber-500",
		},
		{
			id: 3,
			title: "Form IV Mock Exams",
			type: "exam",
			startDate: "2025-03-10",
			endDate: "2025-03-21",
			description: "National examination mock tests for Form IV students",
			color: "bg-red-500",
		},
		{
			id: 4,
			title: "Parent-Teacher Conference",
			type: "event",
			startDate: "2025-04-05",
			endDate: "2025-04-05",
			description: "End of term parent-teacher meetings",
			color: "bg-green-500",
		},
		{
			id: 5,
			title: "Term 1 Holiday",
			type: "holiday",
			startDate: "2025-04-12",
			endDate: "2025-05-04",
			description: "Term 1 school holiday",
			color: "bg-amber-500",
		},
		{
			id: 6,
			title: "New Student Registration",
			type: "registration",
			startDate: "2025-04-21",
			endDate: "2025-04-30",
			description: "Registration period for new students",
			color: "bg-purple-500",
		},
		{
			id: 7,
			title: "Term 2",
			type: "term",
			startDate: "2025-05-05",
			endDate: "2025-08-08",
			description: "Second term of academic year 2024/2025",
			color: "bg-blue-500",
		},
		{
			id: 8,
			title: "Mid-Year Exams",
			type: "exam",
			startDate: "2025-07-14",
			endDate: "2025-07-25",
			description: "Mid-year examinations for all forms",
			color: "bg-red-500",
		},
		{
			id: 9,
			title: "Sports Day",
			type: "event",
			startDate: "2025-06-20",
			endDate: "2025-06-20",
			description: "Annual inter-house sports competition",
			color: "bg-green-500",
		},
		{
			id: 10,
			title: "Staff Training Workshop",
			type: "meeting",
			startDate: "2025-08-04",
			endDate: "2025-08-06",
			description: "Professional development workshop for all staff",
			color: "bg-indigo-500",
		},
		{
			id: 11,
			title: "Term 2 Holiday",
			type: "holiday",
			startDate: "2025-08-09",
			endDate: "2025-09-07",
			description: "Term 2 school holiday",
			color: "bg-amber-500",
		},
		{
			id: 12,
			title: "Term 3",
			type: "term",
			startDate: "2025-09-08",
			endDate: "2025-11-28",
			description: "Third term of academic year 2024/2025",
			color: "bg-blue-500",
		},
		{
			id: 13,
			title: "National Examinations",
			type: "exam",
			startDate: "2025-10-20",
			endDate: "2025-11-14",
			description: "Form II and Form IV national examinations",
			color: "bg-red-500",
		},
		{
			id: 14,
			title: "Graduation Ceremony",
			type: "event",
			startDate: "2025-11-22",
			endDate: "2025-11-22",
			description: "Form IV and Form VI graduation ceremony",
			color: "bg-green-500",
		},
	];

	const eventTypeColors = {
		term: "bg-blue-100 text-blue-800 border-blue-300",
		exam: "bg-red-100 text-red-800 border-red-300",
		holiday: "bg-amber-100 text-amber-800 border-amber-300",
		event: "bg-green-100 text-green-800 border-green-300",
		registration: "bg-purple-100 text-purple-800 border-purple-300",
		meeting: "bg-indigo-100 text-indigo-800 border-indigo-300",
	};

	const eventTypeIcons = {
		term: BookOpen,
		exam: AlertCircle,
		holiday: CalendarDays,
		event: CalendarIcon,
		registration: GraduationCap,
		meeting: Clock,
	};

	const filteredEvents = selectedEventType === "all" ? academicEvents : academicEvents.filter((event) => event.type === selectedEventType);

	const getMonthDays = (date: Date) => {
		const year = date.getFullYear();
		const month = date.getMonth();
		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const daysInMonth = lastDay.getDate();
		const startingDayOfWeek = firstDay.getDay();

		return { daysInMonth, startingDayOfWeek, year, month };
	};

	const getEventsForDate = (date: Date) => {
		const dateStr = date.toISOString().split("T")[0];
		return academicEvents.filter((event) => {
			return dateStr >= event.startDate && dateStr <= event.endDate;
		});
	};

	const renderCalendar = () => {
		const { daysInMonth, startingDayOfWeek, year, month } = getMonthDays(currentMonth);
		const days = [];
		const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		// Add day names
		const dayNameHeaders = dayNames.map((day) => (
			<div key={day} className="text-center font-medium bg-red-theme-100 rounded-xl text-red-theme-500 py-3">
				{day}
			</div>
		));

		// Add empty cells for days before month starts
		for (let i = 0; i < startingDayOfWeek; i++) {
			days.push(<div key={`empty-${i}`} className="border rounded-xl border-gray-200 bg-gray-10 min-h-[100px]"></div>);
		}

		// Add days of the month
		for (let day = 1; day <= daysInMonth; day++) {
			const date = new Date(year, month, day);
			const eventsForDay = getEventsForDate(date);
			const isToday = new Date().toDateString() === date.toDateString();

			days.push(
				<div key={day} className={`border rounded-xl border-[#eee] min-h-[100px] p-4 ${isToday ? "bg-red-theme-100 border-red-theme-300" : "bg-white"}`}>
					<div className={`text-[1em] mb-1 ${isToday ? "text-red-theme-500 font-bold" : "font-medium text-dark-theme-100"}`}>{day}</div>
					<div className="space-y-1">
						{eventsForDay.slice(0, 2).map((event) => (
							<div key={event.id} className={`text-xs px-1.5 py-0.5 rounded truncate ${event.color} text-white`} title={event.title}>
								{event.title}
							</div>
						))}
						{eventsForDay.length > 2 && <div className="text-xs text-gray-500">+{eventsForDay.length - 2} more</div>}
					</div>
				</div>
			);
		}

		return (
			<div className="grid gap-4">
				<div className="gap-1 grid grid-cols-7">{dayNameHeaders}</div>
				<div className="grid grid-cols-7 gap-1">{days}</div>
			</div>
		);
	};

	const previousMonth = () => {
		setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
	};

	const nextMonth = () => {
		setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
	};

	const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	return (
		<div className="space-y-6 pb-10">
			<header className="flex items-center justify-between mt-10 flex-wrap gap-4">
				<section>
					<h1 className="text-[1.6rem] font-bold">Academic Calendar</h1>
					<p className="text-[.9em] text-[#999]">Academic Year {`${new Date().getFullYear()} /  ${new Date().getFullYear() + 1}`}</p>
				</section>

				<section>
					<button className="gap-2 flex items-center bg-red-theme-100 text-red-theme-400 hover:bg-red-theme-400 hover:text-white px-5 py-3 rounded-full cursor-pointer">
						<Icon.AddIcon />
						<p className="text-[.95em]">Add Event</p>
					</button>
				</section>
			</header>

			{/* Academic Year Overview */}
			<div className="grid grid-cols-1 @min-[600]:grid-cols-2 @min-[900]:grid-cols-3 gap-2">
				<div className="p-6 bg-white rounded-2xl">
					<div className="flex items-center gap-3">
						<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
							<BookOpen className="w-6 h-6 text-blue-600" />
						</div>
						<div>
							<p className="text-sm text-gray-600">Current Term</p>
							<p className="text-xl font-medium text-gray-900">Term 1</p>
							<p className="text-xs text-gray-500">Jan 6 - Apr 11, 2025</p>
						</div>
					</div>
				</div>

				<div className="p-6 bg-white rounded-2xl">
					<div className="flex items-center gap-3">
						<div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
							<AlertCircle className="w-6 h-6 text-red-600" />
						</div>
						<div>
							<p className="text-sm text-gray-600">Next Examination</p>
							<p className="text-xl font-medium text-gray-900">Form IV Mock</p>
							<p className="text-xs text-gray-500">Mar 10 - Mar 21, 2025</p>
						</div>
					</div>
				</div>

				<div className="p-6 bg-white rounded-2xl">
					<div className="flex items-center gap-3">
						<div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
							<CalendarDays className="w-6 h-6 text-amber-600" />
						</div>
						<div>
							<p className="text-sm text-gray-600">Next Holiday</p>
							<p className="text-xl font-medium text-gray-900">Mid-Term Break</p>
							<p className="text-xs text-gray-500">Feb 17 - Feb 21, 2025</p>
						</div>
					</div>
				</div>
			</div>

			{/* Calendar Navigation */}
			<div className="p-5 bg-white rounded-2xl grid gap-5">
				<div className="flex items-center justify-between">
					<h1 className="text-xl font-bold">
						{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
					</h1>
					<div className="flex items-center gap-2">
						<button onClick={previousMonth} className="p-2 border border-[#ddd] rounded-[.6rem] cursor-pointer hover:bg-[#ddd]">
							<ChevronLeft className="w-4 h-4" />
						</button>
						<button onClick={() => setCurrentMonth(new Date())} className="p-2 px-4 border border-[#ddd] rounded-[.6rem] cursor-pointer hover:bg-[#ddd]">
							Today
						</button>
						<button onClick={nextMonth} className="p-2 border border-[#ddd] rounded-[.6rem] cursor-pointer hover:bg-[#ddd]">
							<ChevronRight className="w-4 h-4" />
						</button>
					</div>
				</div>
				<div>{renderCalendar()}</div>
				{/* <CardContent>{renderCalendar()}</CardContent> */}
			</div>

			{/* Events List */}
			<div className="p-5 bg-white rounded-2xl grid gap-5">
				<div className="flex items-center justify-between">
					<h1 className="text-[1.2em] font-bold">All Events</h1>
					<div className="flex items-center gap-2">
						<select value={selectedEventType} onChange={(e) => setSelectedEventType(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none">
							<option value="all">All Events</option>
							<option value="term">Terms</option>
							<option value="exam">Examinations</option>
							<option value="holiday">Holidays</option>
							<option value="event">Events</option>
							<option value="registration">Registration</option>
							<option value="meeting">Meetings</option>
						</select>
					</div>
				</div>
				{/* <CardContent>
                    <div className="space-y-3">
                        {filteredEvents.map((event) => {
                            const Icon = eventTypeIcons[event.type];
                            return (
                                <div
                                    key={event.id}
                                    className={`p-4 border-l-4 rounded-lg ${event.color} bg-opacity-10`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-start gap-3 flex-1">
                                            <div
                                                className={`w-10 h-10 ${event.color} bg-opacity-20 rounded-lg flex items-center justify-center shrink-0`}
                                            >
                                                <Icon
                                                    className={`w-5 h-5 ${event.color.replace(
                                                        "bg-",
                                                        "text-"
                                                    )}`}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="font-medium text-gray-900">
                                                        {event.title}
                                                    </h3>
                                                    <Badge className={eventTypeColors[event.type]}>
                                                        {event.type.charAt(0).toUpperCase() +
                                                            event.type.slice(1)}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    {event.description}
                                                </p>
                                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                                    <span className="flex items-center gap-1">
                                                        <CalendarIcon className="w-3 h-3" />
                                                        {new Date(event.startDate).toLocaleDateString(
                                                            "en-US",
                                                            {
                                                                month: "short",
                                                                day: "numeric",
                                                                year: "numeric",
                                                            }
                                                        )}
                                                    </span>
                                                    {event.startDate !== event.endDate && (
                                                        <>
                                                            <span>→</span>
                                                            <span className="flex items-center gap-1">
                                                                <CalendarIcon className="w-3 h-3" />
                                                                {new Date(event.endDate).toLocaleDateString(
                                                                    "en-US",
                                                                    {
                                                                        month: "short",
                                                                        day: "numeric",
                                                                        year: "numeric",
                                                                    }
                                                                )}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="sm">
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" size="sm">
                                                <Trash2 className="w-4 h-4 text-red-600" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </CardContent> */}
			</div>

			{/* Add Event Modal */}
			{/* {showAddEventModal &&  <AddEventModal /> } */}
		</div>
	);
}

// export function AddEventModal() {
//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//                 <CardHeader>
//                     <CardTitle>Add New Event</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                     <div className="space-y-2">
//                         <Label htmlFor="event-title">Event Title</Label>
//                         <Input id="event-title" placeholder="Enter event title" />
//                     </div>

//                     <div className="space-y-2">
//                         <Label htmlFor="event-type">Event Type</Label>
//                         <select
//                             id="event-type"
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                         >
//                             <option value="term">Term</option>
//                             <option value="exam">Examination</option>
//                             <option value="holiday">Holiday</option>
//                             <option value="event">Event</option>
//                             <option value="registration">Registration</option>
//                             <option value="meeting">Meeting</option>
//                         </select>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                             <Label htmlFor="start-date">Start Date</Label>
//                             <Input id="start-date" type="date" />
//                         </div>
//                         <div className="space-y-2">
//                             <Label htmlFor="end-date">End Date</Label>
//                             <Input id="end-date" type="date" />
//                         </div>
//                     </div>

//                     <div className="space-y-2">
//                         <Label htmlFor="event-description">Description</Label>
//                         <textarea
//                             id="event-description"
//                             className="w-full min-h-[100px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                             placeholder="Enter event description"
//                         />
//                     </div>

//                     <div className="flex gap-3 pt-4">
//                         <Button
//                             variant="outline"
//                             className="flex-1"
//                             onClick={() => setShowAddEventModal(false)}
//                         >
//                             Cancel
//                         </Button>
//                         <Button
//                             className="flex-1 bg-purple-600 hover:bg-purple-700"
//                             onClick={() => setShowAddEventModal(false)}
//                         >
//                             Add Event
//                         </Button>
//                     </div>
//                 </CardContent>
//             </Card>
//         </div>
//     )
// }
