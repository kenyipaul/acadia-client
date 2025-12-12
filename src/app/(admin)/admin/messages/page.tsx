"use client";
import * as Icon from "@/components/ui/icons";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Inbox, Send, PenSquare, Search, Star, Archive, Trash2, ArrowLeft, Paperclip, Reply, Forward, MoreVertical } from "lucide-react";

type MessageView = "inbox" | "sent" | "compose" | "thread";

interface Message {
	id: number;
	from: string;
	fromRole: string;
	to: string;
	subject: string;
	preview: string;
	body: string;
	date: string;
	time: string;
	read: boolean;
	starred: boolean;
	hasAttachment: boolean;
	thread?: Message[];
}

export default function Messages() {
	const [currentView, setCurrentView] = useState<MessageView>("inbox");
	const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
	const [searchQuery, setSearchQuery] = useState("");

	const inboxMessages: Message[] = [
		{
			id: 1,
			from: "Dr. Sarah Johnson",
			fromRole: "Headmaster",
			to: "All Staff",
			subject: "Upcoming Parent-Teacher Conference",
			preview: "Please note that the parent-teacher conference is scheduled for next Friday...",
			body: "Please note that the parent-teacher conference is scheduled for next Friday, December 20th. All teachers are expected to prepare student progress reports and be available for parent consultations between 9:00 AM and 4:00 PM.\n\nKindly confirm your availability by replying to this message.\n\nBest regards,\nDr. Sarah Johnson\nHeadmaster",
			date: "Dec 11",
			time: "10:30 AM",
			read: false,
			starred: true,
			hasAttachment: false,
		},
		{
			id: 2,
			from: "Mr. James Anderson",
			fromRole: "Bursar",
			to: "Secretary",
			subject: "Fee Payment Report - November 2024",
			preview: "Attached is the fee payment report for November. Please review and file...",
			body: "Attached is the fee payment report for November 2024. Please review the document and file it accordingly. We have achieved 87% fee collection rate this month.\n\nLet me know if you need any clarifications.\n\nRegards,\nJames Anderson\nBursar",
			date: "Dec 10",
			time: "2:15 PM",
			read: true,
			starred: false,
			hasAttachment: true,
		},
		{
			id: 3,
			from: "Ms. Patricia Moore",
			fromRole: "Secretary",
			to: "All Teachers",
			subject: "Updated Class Schedules",
			preview: "The class schedules have been updated for the new term. Please check your assignments...",
			body: "The class schedules have been updated for the new term. Please check your assignments on the system and report any conflicts immediately.\n\nDeadline for reporting conflicts: December 13th\n\nThank you,\nPatricia Moore\nSecretary",
			date: "Dec 9",
			time: "11:45 AM",
			read: true,
			starred: false,
			hasAttachment: false,
		},
		{
			id: 4,
			from: "Mr. Robert Wilson",
			fromRole: "Teacher",
			to: "Headmaster",
			subject: "Request for Science Lab Equipment",
			preview: "I would like to request additional equipment for the science laboratory...",
			body: "I would like to request additional equipment for the science laboratory. The current microscopes are outdated and we need at least 5 new ones for the practical sessions.\n\nEstimated cost: TSh 2,500,000\n\nPlease advise on the procurement process.\n\nBest regards,\nRobert Wilson\nScience Teacher",
			date: "Dec 8",
			time: "9:20 AM",
			read: true,
			starred: false,
			hasAttachment: false,
		},
		{
			id: 5,
			from: "Mrs. Linda Martinez",
			fromRole: "Admin",
			to: "All Users",
			subject: "System Maintenance Notice",
			preview: "The school management system will undergo maintenance this weekend...",
			body: "The school management system will undergo maintenance this weekend (December 14-15). The system will be unavailable from Saturday 10:00 PM to Sunday 6:00 AM.\n\nPlease complete any urgent tasks before the maintenance window.\n\nApologies for any inconvenience.\n\nRegards,\nLinda Martinez\nSystem Administrator",
			date: "Dec 7",
			time: "4:30 PM",
			read: false,
			starred: false,
			hasAttachment: false,
		},
	];

	const sentMessages: Message[] = [
		{
			id: 6,
			from: "You",
			fromRole: "Secretary",
			to: "Dr. Sarah Johnson",
			subject: "Student Registration Summary",
			preview: "Please find attached the student registration summary for this term...",
			body: "Please find attached the student registration summary for this term. We have registered 127 new students across all forms.\n\nTotal students: 1,050\nNew registrations: 127\nTransfers: 8\n\nLet me know if you need additional details.\n\nBest regards",
			date: "Dec 10",
			time: "3:45 PM",
			read: true,
			starred: false,
			hasAttachment: true,
		},
		{
			id: 7,
			from: "You",
			fromRole: "Secretary",
			to: "All Teachers",
			subject: "Reminder: Submit Attendance Records",
			preview: "This is a reminder to submit your attendance records by end of day...",
			body: "This is a reminder to submit your attendance records by end of day today. The system requires all attendance data to be up to date for the monthly report.\n\nThank you for your cooperation.",
			date: "Dec 9",
			time: "1:20 PM",
			read: true,
			starred: false,
			hasAttachment: false,
		},
	];

	const filteredInbox = inboxMessages.filter((msg) => msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) || msg.from.toLowerCase().includes(searchQuery.toLowerCase()) || msg.preview.toLowerCase().includes(searchQuery.toLowerCase()));

	const filteredSent = sentMessages.filter((msg) => msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) || msg.to.toLowerCase().includes(searchQuery.toLowerCase()) || msg.preview.toLowerCase().includes(searchQuery.toLowerCase()));

	const handleMessageClick = (message: Message) => {
		setSelectedMessage(message);
		setCurrentView("thread");
	};

	const handleBackToInbox = () => {
		setSelectedMessage(null);
		setCurrentView("inbox");
	};

	const renderMessageList = (messages: Message[], type: "inbox" | "sent") => (
		<div className="space-y-2">
			{messages.length === 0 ? (
				<div className="text-center py-12 text-gray-500">
					<Mail className="w-12 h-12 mx-auto mb-3 text-gray-300" />
					<p>No messages found</p>
				</div>
			) : (
				messages.map((message) => (
					<div key={message.id} onClick={() => handleMessageClick(message)} className={`p-4 border border-[#ddd] rounded-xl cursor-pointer transition-colors hover:bg-gray-50 ${!message.read && type === "inbox" ? "bg-red-theme-100 border-red-theme-200" : "bg-white"}`}>
						<div className="flex items-start justify-between gap-3">
							<div className="flex-1 min-w-0">
								<div className="flex items-center gap-2 mb-1">
									<p className={`${!message.read && type === "inbox" ? "font-bold" : "font-medium"} text-gray-900 truncate`}>{type === "inbox" ? message.from : message.to}</p>
									<Badge variant="secondary" className="text-xs">
										{message.fromRole}
									</Badge>
									{!message.read && type === "inbox" && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
								</div>
								<p className={`text-sm ${!message.read && type === "inbox" ? "font-semibold" : "font-medium"} text-gray-900 mb-1`}>{message.subject}</p>
								<p className="text-sm text-gray-600 truncate mt-2">{message.preview}</p>
							</div>
							<div className="flex flex-col items-end gap-2 shrink-0">
								<span className="text-xs text-gray-500">{message.date}</span>
								<div className="flex items-center gap-2">
									{message.hasAttachment && <Paperclip className="w-4 h-4 text-gray-400" />}
									{message.starred && <Star className="w-4 h-4 text-amber-500 fill-amber-500" />}
								</div>
							</div>
						</div>
					</div>
				))
			)}
		</div>
	);

	const renderThread = () => {
		if (!selectedMessage) return null;

		return (
			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<button onClick={handleBackToInbox} className="py-2 rounded-[.7rem] flex items-center cursor-pointer">
						<ArrowLeft className="w-4 h-4 mr-2" />
						Back to Inbox
					</button>
					<div className="flex gap-2">
						<button className="p-2 px-4 rounded-[.7rem] flex items-center cursor-pointer border border-[#ccc]">
							<Star className="w-4 h-4 mr-2" />
							Star
						</button>
						<button className="p-2 px-4 rounded-[.7rem] flex items-center cursor-pointer border border-[#ccc]">
							<Archive className="w-4 h-4 mr-2" />
							Archive
						</button>
						<button className="p-2 px-4 rounded-[.7rem] flex items-center cursor-pointer border border-[#ccc]">
							<Trash2 className="w-4 h-4 mr-2" />
							Delete
						</button>
					</div>
				</div>

				<div className="bg-white p-5 rounded-2xl grid gap-5">
					<div>
						<h1 className="text-xl font-bold">{selectedMessage.subject}</h1>
					</div>
					<div className="space-y-4">
						<div className="flex items-start justify-between pb-4 border-b border-[#ddd]">
							<div className="flex items-start gap-3">
								<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
									<span className="font-medium text-blue-600">
										{selectedMessage.from
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</span>
								</div>
								<div>
									<p className="font-medium text-gray-900">{selectedMessage.from}</p>
									<p className="text-sm text-gray-600">
										<span className="font-medium">To:</span> {selectedMessage.to}
									</p>
									<p className="text-xs text-gray-500 mt-1">
										{selectedMessage.date} at {selectedMessage.time}
									</p>
								</div>
							</div>
							<Button variant="ghost" size="sm">
								<MoreVertical className="w-4 h-4" />
							</Button>
						</div>

						<div className="prose max-w-none">
							<p className="text-gray-700 whitespace-pre-line">{selectedMessage.body}</p>
						</div>

						{selectedMessage.hasAttachment && (
							<div className="pt-4 border-t border-[#ddd]">
								<p className="text-sm font-medium text-gray-900 mb-2">Attachments</p>
								<div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
									<Paperclip className="w-4 h-4 text-gray-500" />
									<span className="text-sm text-gray-700">report_november_2024.pdf</span>
									<span className="text-xs text-gray-500">(245 KB)</span>
									<Button variant="ghost" size="sm" className="ml-auto">
										Download
									</Button>
								</div>
							</div>
						)}

						<div className="flex gap-2 pt-4">
							<button className="flex items-center py-2.5 px-4 bg-red-theme-100 text-red-theme-400 rounded-[.7rem] gap-1 cursor-pointer">
								<Reply className="w-4 h-4 mr-2" />
								Reply
							</button>
							<button className="flex items-center py-2.5 px-4 bg-[#eee] rounded-[.7rem] gap-1 cursor-pointer">
								<Forward className="w-4 h-4 mr-2" />
								Forward
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const renderCompose = () => (
		<div className="bg-white p-5 rounded-2xl grid gap-5">
			<div>
				<h1 className="text-xl font-bold">New Message</h1>
			</div>
			<div className="space-y-4">
				<div className="space-y-2 grid gap-0.5">
					<label htmlFor="to">To</label>
					<input id="to" placeholder="Select recipient..." className="px-4 py-3.5 border border-[#ccc] w-full rounded-[.7rem] outline-none" />
				</div>
				<div className="space-y-2 grid gap-0.5">
					<label htmlFor="subject">Subject</label>
					<input id="subject" placeholder="Message subject" className="px-4 py-3.5 border border-[#ccc] w-full rounded-[.7rem] outline-none" />
				</div>
				<div className="space-y-2 grid gap-0.5">
					<label htmlFor="message">Message</label>
					<textarea id="message" placeholder="Type your message here..." className="px-4 py-3.5 border border-[#ccc] w-full rounded-[.7rem] outline-none min-h-[140px] max-h-[300px]" />
				</div>
				<div className="flex items-center justify-between pt-4">
					<button className=" p-2.5 px-4 text-[.95rem] rounded-[.6rem] cursor-pointer bg-[#eee] flex items-center">
						<Paperclip className="w-4 h-4 mr-2" />
						Attach File
					</button>
					<div className="flex gap-2">
						<button onClick={() => setCurrentView("inbox")} className="text-[.95rem] p-2 px-4 rounded-[.6rem] cursor-pointer bg-[#eee]">
							Cancel
						</button>
						<button className="bg-red-theme-100 text-[.95rem] text-red-theme-400 hover:bg-blue-700 p-2 gap-2 flex rounded-[.6rem] cursor-pointer items-center">
                            <Icon.SendIcon />
							Send Message
						</button>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<div className="space-y-6">
			<header className="flex items-center justify-between mt-10 flex-wrap gap-4">
				<section>
					<h1 className="text-[1.6rem] font-bold">Messages</h1>
					<p className="text-[.9em] text-[#999]">Communicate with staff and administrators</p>
				</section>

				<button className="gap-2 flex items-center bg-red-theme-100 text-red-theme-400 hover:bg-red-theme-400 hover:text-white px-5 py-3 rounded-full cursor-pointer">
					<Icon.EditIcon />
					<p className="text-[.95em]">Compose</p>
				</button>
			</header>

			<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
				<div className="lg:col-span-1">
					<div className="p-4 bg-white rounded-2xl">
						<div className="space-y-1">
							<button onClick={() => setCurrentView("inbox")} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${currentView === "inbox" ? "bg-red-theme-100 text-red-theme-500" : "text-gray-700 hover:bg-gray-50"}`}>
								<Icon.InboxIcon />
								<span>Inbox</span>
								<div className="ml-auto py-0.5 px-2 rounded-full bg-red-theme-500 text-white">{inboxMessages.filter((m) => !m.read).length}</div>
							</button>
							<button onClick={() => setCurrentView("sent")} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${currentView === "sent" ? "bg-red-theme-100 text-red-theme-500" : "text-gray-700 hover:bg-gray-50"}`}>
								<Icon.SendIcon />
								<span>Sent</span>
							</button>
							<button onClick={() => setCurrentView("compose")} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${currentView === "compose" ? "bg-red-theme-100 text-red-theme-500" : "text-gray-700 hover:bg-gray-50"}`}>
								<Icon.EditIcon />
								<span>Compose</span>
							</button>
						</div>
					</div>
				</div>

				{/* Main Content */}
				<div className="lg:col-span-3">
					{currentView === "inbox" && (
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="relative flex-1">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
									<input placeholder="Search messages..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="p-4 pl-10 border border-[#ccc] w-full rounded-[.7rem] outline-none" />
								</div>
							</div>
							{renderMessageList(filteredInbox, "inbox")}
						</div>
					)}

					{currentView === "sent" && (
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="relative flex-1">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
									<input placeholder="Search sent messages..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="p-4 pl-10 border border-[#ccc] w-full rounded-[.7rem] outline-none" />
								</div>
							</div>
							{renderMessageList(filteredSent, "sent")}
						</div>
					)}

					{currentView === "compose" && renderCompose()}
					{currentView === "thread" && renderThread()}
				</div>
			</div>
		</div>
	);
}
