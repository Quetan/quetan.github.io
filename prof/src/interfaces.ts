export interface Course {
	id: number;
	fullname: string;
	displayname: string;
	shortname: string;
	categoryid: number;
	categoryname: string;
	sortorder: number;
	summary: string;
	summaryformat: number;
	summaryfiles: any[];
	overviewfiles: Overviewfile[];
	showactivitydates: boolean;
	showcompletionconditions?: boolean;
	contacts: any[];
	enrollmentmethods: string[];
	idnumber: string;
	format: string;
	showgrades: number;
	newsitems: number;
	startdate: number;
	enddate: number;
	maxbytes: number;
	showreports: number;
	visible: number;
	groupmode: number;
	groupmodeforce: number;
	defaultgroupingid: number;
	enablecompletion: number;
	completionnotify: number;
	lang: string;
	theme: string;
	marker: number;
	legacyfiles: number;
	calendartype: string;
	timecreated: number;
	timemodified: number;
	requested: number;
	cacherev: number;
	filters: Filter[];
	courseformatoptions?: Courseformatoption[];
}

export interface Overviewfile {
	filename: string;
	filepath: string;
	filesize: number;
	fileurl: string;
	timemodified: number;
	mimetype: string;
}

export interface Filter {
	filter: string;
	localstate: number;
	inheritedstate: number;
}

export interface Courseformatoption {
	name: string;
	value: number;
}
