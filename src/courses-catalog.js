export const courses = [
	{
		id: '2a8ecc4d-8d28-4422-bfde-f92cf262c44b',
		title: 'האמת הלא נוחה על ליברליזם: מה הקרבנו בשם החירות?',
		description: `
			בשנים האחרונות, דמוקרטיות ליברליות רבות מתמודדות עם גל פופוליזם שיוצא נגד כל מה שהן מייצגות, גל שצובר תאוצה תוך שימוש בפייק ניוז, רגשות טינה ותסכול על רקע חברתי-כלכלי.
			קל מדי לפתור את עצמנו מכל הביקורות הללו תוך שיוכן ל״ביביסטים״, טראמפיסטים״ וכדומה.
		`,
		additionalDescription: `
			הדבר המעניין אך המאתגר יותר הוא ללמוד ולהתמודד עם חיצי הביקורת הרציניים באמת על הליברליזם, חיצי ביקורת שהופנו אליו על ידי הוגים כגון צ'רלס טיילור, אלסאדיר מקינטאייר ומייקל סנדל.
			ניתלה במהלך הקורס באילנות גבוהים של פילוסופים והוגים מן העבר הרחוק והקרוב, ואת המפגש האחרון נקדיש לניתוח ולדיון על ישראל והישראליות.
		`,
		tags: ['ליברליזם', 'פוליטיקה', 'פילוסופיה'],
		teacher: {
			name: 'אסף דה פריס',
			bio: 'מורה למחשבת ישראל ומדריך פדגוגי במשרד החינוך. לאסף תואר ראשון ושני בפילוסופיה יהודית מאוניברסיטת תל אביב והוא בוגר של בית ספר מנדל למנהיגות חינוכית.',
			image: 'https://cdn.prod.website-files.com/64d7d22f53b2cc995497a72e/651454a387ad86997457edba_asaf%20-%20croped.jpg',
		},
		price: 375,
		duration: 5,
		startDate: 'רביעי, 12 במרץ, 2025',
		startDateEn: '2025-03-12',
		startTime: '19:00',
		endTime: '20:45',
		location: 'תחנת רוח, החשמונאים 12',
		spots: {
			total: 15,
			available: 3,
		},
		image: 'https://images.unsplash.com/photo-1620662831351-9f68f76d0b9a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRoaW5rfGVufDB8fDB8fHww'
	},
	{
		id: 'd23b6e0d-3a46-412a-97e2-6b8c438ef890',
		title: 'סדנת עמידות ידיים',
		description: 'ארבעה מפגשים מעשיים בהם נלמד טכניקות בסיסיות ומתקדמות לעמידות ידיים, תוך עבודה על שיווי משקל, חיזוק ליבה ושליטה בגוף.',
		tags: ['תנועה', 'ספורט', 'ים'],
		teacher: {
			name: 'נועה ברקאי',
			bio: 'מאמנת תנועה ומורה ליוגה עם ניסיון של 12 שנים בלימוד ותרגול עמידות ידיים.',
			image: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
		},
		price: 300,
		duration: 4,
		startDate: 'שלישי, 25 בפברואר, 2025',
		startDateEn: '2025-02-25',
		startTime: '07:30',
		endTime: '08:45',
		location: 'חוף גורדון, תל אביב',
		spots: {
			total: 8,
			available: 0,
		},
		image: 'https://images.unsplash.com/photo-1494740696951-8a5a68e0a63b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFuZCUyMHN0YW5kfGVufDB8fDB8fHww',
	},
	{
		id: '3fbb9a7d-77f6-44e4-b748-5bf1f4cb82d2',
		title: 'סדנת כתיבת והלחנה',
		description: 'חמישה מפגשים בהם נחקור את סודות השירה, נלמד טכניקות כתיבה שונות ונעמיק בסגנונות מגוונים, תוך עידוד יצירה אישית.',
		tags: ['כתיבה', 'מוזיקה', 'יצירה'],
		teacher: {
			name: 'יונתן שדה',
			bio: 'מוזיקאי וסולן להקת היונים, מנחה סדנאות כתיבה והלחנה במוסיקה עצמאית.',
			image: 'https://images.unsplash.com/photo-1541752171745-4176eee47556?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbiUyMHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww',
		},
		price: 400,
		duration: 5,
		startDate: 'שני, 5 בפברואר, 2025',
		startDateEn: '2025-02-05',
		startTime: '18:00',
		endTime: '19:30',
		location: 'בית הסופרים, תל אביב',
		spots: {
			total: 10,
			available: 2,
		},
		image: 'https://images.unsplash.com/photo-1576238580501-f21ccaaa83ac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvZXRyeXxlbnwwfHwwfHx8MA%3D%3D',
	},
	{
		id: '9e06d0c8-7b85-4a32-abe6-1e5c00f4b8b7',
		title: 'קבוצת שחייה חופשית',
		description: 'מפגשים שבועיים לשחייה משותפת בים הפתוח, עם דגש על שיפור סגנון, כושר ושחייה בקבוצה.',
		tags: ['ספורט', 'שחייה', 'ים'],
		teacher: {
			name: 'יואב מזרחי',
			bio: 'חובב ים ומדריך שחייה מעל עשור.',
			image: 'https://plus.unsplash.com/premium_photo-1730105510326-7e23c2c441f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwcHJvZmlsZSUyMHBpY3R1cmUlMjBvbGRlcnxlbnwwfHwwfHx8MA%3D%3D',
		},
		price: 0,
		duration: 8,
		startDate: 'שבת, 20 בינואר, 2025',
		startDateEn: '2025-01-20',
		startTime: '07:00',
		endTime: '08:00',
		location: 'חוף ירושלים, תל אביב',
		spots: {
			total: 20,
			available: 5,
		},
		image: 'https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dpbXxlbnwwfHwwfHx8MA%3D%3D',
	},
	{
		id: 'c75e3d02-f26a-4e94-8f3e-1a5c3a9c53a0',
		title: 'מועדון ספר - קריאה מודרכת במלחמה ושלום',
		description: 'שישה מפגשים בהם נקרא יחד את "מלחמה ושלום" של טולסטוי, ננתח את הדמויות, המבנה והפילוסופיה שמאחורי היצירה.',
		tags: ['ספרות', 'קריאה', 'פילוסופיה'],
		teacher: {
			name: 'שירה כהן',
			bio: 'מרצה לספרות רוסית ומבקרת ספרות עם זיקה מיוחדת לטולסטוי ודוסטויבסקי.',
			image: 'https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFuJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D',
		},
		price: 280,
		duration: 6,
		startDate: 'שישי, 10 בינואר, 2025',
		startDateEn: '2025-01-10',
		startTime: '20:00',
		endTime: '21:30',
		location: 'סלון הספרות, תל אביב',
		spots: {
			total: 12,
			available: 0,
		},
		image: 'https://www.e-vrit.co.il/Images/Products/KibbutzMasters/warandpeace_master(1).jpg',
	},
	{
		id: 'e58c7a04-689d-4b47-b0a6-bc2486f9a3a6',
		title: 'התנהלות פיננסית נבונה 101',
		description: 'סדנה פרקטית בת ארבעה מפגשים שבהם נלמד ניהול תקציב אישי, השקעות בסיסיות, התמודדות עם חובות ואסטרטגיות לחיסכון אפקטיבי.',
		tags: ['כלכלה', 'השקעות', 'ניהול תקציב'],
		teacher: {
			name: 'אורית לוי',
			bio: 'יועצת פיננסית ומרצה לכלכלת משק בית, בעלת ניסיון של מעל עשור בהנגשת ניהול כספים לצעירים ומשפחות.',
			image: 'https://source.unsplash.com/600x300/?finance',
		},
		price: 320,
		duration: 4,
		startDate: 'שבת, 15 בפברואר, 2025',
		startDateEn: '2025-02-15',
		startTime: '18:30',
		endTime: '20:00',
		location: 'קפה פיני, גבעתיים',
		spots: {
			total: 20,
			available: 7,
		},
		image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
	},
];
