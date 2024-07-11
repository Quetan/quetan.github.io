export type ICourse = {
	id: number;
	fullname: string;
	displayname: string;
	shortname: string;
	categoryid: number;
	categoryname: string;
	sortorder: number;
	summary: string;
	summaryformat: number;
	summaryfiles: Array<{
		filename: string;
		filepath: string;
		filesize: number;
		fileurl: string;
		timemodified: number;
		mimetype: string;
		isexternalfile: boolean;
	}>;
	overviewfiles: Array<{
		filename: string;
		filepath: string;
		filesize: number;
		fileurl: string;
		timemodified: number;
		mimetype: string;
	}>;
	showactivitydates: boolean;
	showcompletionconditions?: boolean;
	contacts: Array<{
		id: number;
		fullname: string;
	}>;
	enrollmentmethods: Array<string>;
	customfields: Array<{
		name: string;
		shortname: string;
		type: string;
		valueraw: number;
		value: string;
	}>;
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
	filters: Array<{
		filter: string;
		localstate: number;
		inheritedstate: number;
	}>;
	courseformatoptions?: Array<{
		name: string;
		value: number;
	}>;
	courseType?: Category;
};

export type Category = 'all' | 'personal' | 'group' | 'seminar' | 'media';
export type Sort = 'new' | 'old';
export type Tag =
	| 'all'
	| 'tag_2023'
	| 'tag_2024'
	| 'tag_chairman_assist'
	| 'tag_personal_growth'
	| 'tag_reports_and_elections'
	| 'tag_ppo';
export type Search = string;

export interface FilterState {
	search: Search;
	type: Category;
	tag: Tag;
	sort: Sort;
}
