export const siteConfig = {
  name: "Garage Door Repairs",
  shortName: "Garage Door Repairs",
  url: "https://garagedoorepairs.com",
  phone: "+14243874585",
  phoneDisplay: "(424) 387-4585",
  email: "info@garagedoorepairs.com",
  hours: "Open 24 Hours",
  description:
    "Garage door repair, installation, and emergency service across Los Angeles. Free estimates, 15+ years of experience, available 24/7.",
  address: {
    streetAddress: "1864 N Vermont Ave",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90027",
    addressCountry: "US",
  },
  geo: {
    latitude: 34.0522,
    longitude: -118.2437,
  },
  sameAs: [] as string[],
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}`
)}`;

export type FaqItem = {
  question: string;
  answer: string;
};

export type ExpandedServiceContent = {
  whyLocal: string;
  commonProblems: { title: string; body: string }[];
  costSection: string;
  costGuideLinkText?: string;
  emergencySection: string;
  repairVsReplace: string;
  areasServed: string;
};

export type ServicePageDef = {
  slug: string;
  title: string;
  keyword: string;
  description: string;
  quickAnswer: string;
  intro: string;
  signs: string[];
  covered: string[];
  faqs: FaqItem[];
  expandedContent?: ExpandedServiceContent;
  // Optional sentence linking to the LA cost guide. Rendered only when
  // present, scoped to this one service entry - does not affect other pages.
  costGuideLinkText?: string;
};

export const servicePages: ServicePageDef[] = [
  {
    slug: "garage-door-repair",
    title: "Garage Door Repair",
    keyword: "Garage Door Repair",
    description:
      "Professional garage door repair services for homes and businesses. Fast diagnosis, honest pricing, same-day service.",
    quickAnswer:
      "Need garage door repair? Garage Door Repairs diagnoses and fixes sticking doors, broken hardware, and unresponsive openers across Los Angeles, with 24-hour service availability. Call (424) 387-4585 for help.",
    intro:
      "A garage door that sticks, slams, or won't respond is more than an inconvenience — it's a security and safety concern. Our technicians diagnose the root cause and repair it correctly the first time, instead of masking the symptom.",
    signs: [
      "Door is slow to open or close, or stops partway",
      "Loud grinding, popping, or scraping noises during operation",
      "Door opens unevenly or looks crooked",
      "Remote or wall switch is unresponsive",
      "Visible wear on cables, springs, or hardware",
    ],
    covered: [
      "Full diagnostic inspection",
      "Spring, cable, and hardware repair",
      "Panel and section repair",
      "Sensor and safety eye adjustment",
      "Noise reduction and lubrication service",
    ],
    faqs: [
      {
        question: "How quickly can a technician get to my home?",
        answer:
          "Response times depend on your location and current schedule. Call us and we'll give you the most accurate estimate for same-day availability in your area.",
      },
      {
        question: "Is it safe to keep using my garage door if it's making noise?",
        answer:
          "Unusual noise often signals a developing problem with hardware or springs. We recommend having it inspected before it becomes a bigger, more expensive repair.",
      },
      {
        question: "Do you repair all garage door brands?",
        answer:
          "Our technicians work on a wide range of residential garage door brands and models. Let us know your door type when you call.",
      },
      {
        question: "What's the difference between a repair and a tune-up?",
        answer:
          "A repair addresses a specific failure, like a broken spring or stuck opener. A tune-up is a broader inspection and adjustment of the whole system, often done as preventive maintenance.",
      },
      {
        question: "Do you offer same-day garage door repair?",
        answer:
          "Same-day service may be available depending on your location and our current schedule. Call us to check availability for your address.",
      },
      {
        question: "What should I check before calling for repair?",
        answer:
          "Check that the opener has power and the manual lock isn't engaged. Beyond that, avoid forcing the door and call us to diagnose the issue safely.",
      },
      {
        question: "Will the repair come with any kind of workmanship guarantee?",
        answer:
          "We stand behind our workmanship. Ask your technician about specific coverage for the parts and labor involved in your repair.",
      },
    ],
    costGuideLinkText:
      "Curious what a repair like this typically costs? See our Los Angeles garage door repair pricing guide for general ranges and what affects the final price.",
  },
  {
    slug: "garage-door-repair-los-angeles",
    title: "Garage Door Repair Los Angeles",
    keyword: "Garage Door Repair Los Angeles",
    description:
      "Trusted garage door repair in Los Angeles. Local technicians, fast response times, and quality workmanship guaranteed.",
    quickAnswer:
      "Need garage door repair in Los Angeles? Garage Door Repairs provides 24-hour service availability for stuck doors, broken springs, opener issues, off-track doors, and garage door replacement. Call (424) 387-4585 for help.",
    intro:
      "Los Angeles homes rely on their garage door every day — for security, for parking, and often as a main entry point. When it stops working properly, our local technicians are ready to diagnose and repair the issue.",
    signs: [
      "Door won't open or close fully",
      "Door reverses immediately after closing",
      "Remote control range has dropped significantly",
      "Door feels heavy or unbalanced when moved manually",
      "Visible rust, bending, or damage to track or panels",
    ],
    covered: [
      "Residential garage door repair",
      "Spring and cable replacement",
      "Opener diagnostics and repair",
      "Track and roller adjustment",
      "Weatherproofing and seal repair",
    ],
    faqs: [
      {
        question: "Do you serve all areas of Los Angeles?",
        answer:
          "We serve Los Angeles and many surrounding communities. Call us with your address and we'll confirm availability for your area.",
      },
      {
        question: "What does a typical repair visit involve?",
        answer:
          "A technician inspects the door and opener system, identifies the cause of the issue, and walks you through the repair options before any work begins.",
      },
      {
        question: "Can you fix a door that came off its track?",
        answer:
          "Yes. Off-track doors are a common and time-sensitive repair. See our dedicated off-track repair page for more detail.",
      },
      {
        question: "Is garage door repair in Los Angeles different from other areas?",
        answer:
          "The work itself is similar, but LA's mix of older homes and newer construction means technicians often see a wide range of door ages and styles in the same week.",
      },
      {
        question: "Do you charge extra for traveling within Los Angeles?",
        answer:
          "Pricing structures vary by job. Call us with your address and the issue you're experiencing for accurate pricing information.",
      },
      {
        question: "Can I get a same-day appointment in Los Angeles?",
        answer:
          "Same-day availability depends on your specific location and our schedule that day. Call us directly for the most accurate estimate.",
      },
      {
        question: "Do you work on commercial garage doors in LA?",
        answer:
          "Our primary focus is residential garage doors. Call to discuss your specific situation if you have a commercial property.",
      },
      {
        question: "How much does garage door repair cost in Los Angeles?",
        answer:
          "Cost depends on the problem, the parts needed, and your door's size and type. We provide a final estimate after inspecting the door in person. Emergency or after-hours service may cost more than a scheduled appointment.",
      },
      {
        question: "Is garage door spring replacement dangerous?",
        answer:
          "Yes, springs are under high tension and can cause serious injury if handled without the right tools and training. We recommend professional replacement rather than attempting it yourself.",
      },
      {
        question: "Should I repair or replace my garage door?",
        answer:
          "If the issue is limited to one part and the door is otherwise in good condition, repair is often the better value. Frequent repairs or significant damage may make replacement more practical. A technician can advise after inspection.",
      },
    ],
    expandedContent: {
      whyLocal:
        "Choosing a local Los Angeles garage door company means working with technicians who are familiar with the city's mix of housing styles, from older single-family homes to newer multi-unit properties. Local technicians also know the area well enough to plan routes efficiently, which can help with scheduling. Working locally also means it's easier to follow up if you have questions after a repair, since the same company that did the work is based nearby.",
      commonProblems: [
        {
          title: "Broken or Worn Springs",
          body: "Garage door springs carry the full weight and tension of the door, and they wear out over time from repeated use. A broken spring often shows up as a loud bang followed by a door that won't open, or a door that suddenly feels very heavy to lift. Spring replacement is one of the most common repairs we perform across Los Angeles.",
        },
        {
          title: "Off-Track Doors",
          body: "Doors can come off track from worn rollers, a bent track, or an obstruction during operation. An off-track door can look crooked or get stuck partway through its cycle, and it's usually not safe to keep operating until it's been inspected.",
        },
        {
          title: "Opener and Remote Failures",
          body: "When a remote or wall switch stops responding, the cause could be anything from a dead battery to a failing opener motor. We diagnose the full system to confirm whether the fix is a simple reprogram or a more involved repair.",
        },
        {
          title: "Noisy or Slow-Moving Doors",
          body: "Grinding, scraping, or rattling noises usually point to worn rollers, loose hardware, or a track that needs realignment. Left unaddressed, this kind of wear can lead to a bigger failure later on.",
        },
      ],
      costSection:
        "Garage door repair cost in Los Angeles depends on the specific problem, the parts involved, and your door's size and type. Spring replacement, opener repair, and off-track issues all have different cost factors, and the severity of the damage plays a role as well. We provide a final estimate after inspecting the door in person, since an accurate quote isn't possible without seeing the issue directly. Emergency or after-hours service may cost more than a scheduled daytime appointment.",
      costGuideLinkText:
        "For a closer look at typical price ranges by repair type, see our Los Angeles garage door repair cost guide.",
      emergencySection:
        "Garage door problems don't always happen during business hours. A door that won't close is a security concern, and a snapped spring or cable can make a door unsafe to operate at all. We offer 24-hour service availability for these kinds of urgent situations, though exact response times can vary depending on your location and our schedule at the time you call. Same-day service may also be available for non-emergency repairs, depending on availability.",
      repairVsReplace:
        "Deciding between repair and replacement usually comes down to the extent of the damage and the age of the door. If the problem is isolated to one part, like a spring or a section of track, and the rest of the door is in good shape, repair is typically the more cost-effective choice. If the door is older, has damage in multiple areas, or needs frequent repairs, full replacement may save money over time. A technician can give you a clearer recommendation after looking at the door in person.",
      areasServed:
        "Our Los Angeles garage door repair service covers the city and a number of surrounding communities. Coverage and response times can vary by location, so it's best to call with your address to confirm availability before scheduling.",
    },
  },
  {
    slug: "garage-door-spring-replacement",
    title: "Garage Door Spring Replacement",
    keyword: "Garage Door Spring Replacement",
    description:
      "Safe, professional garage door spring replacement. Broken spring repair for torsion and extension springs.",
    quickAnswer:
      "Broken garage door spring? Garage Door Repairs safely replaces torsion and extension springs across Los Angeles, with 24-hour service availability for doors that won't open. Call (424) 387-4585 for help.",
    intro:
      "Garage door springs carry the full tension of the door and are dangerous to handle without training. If your spring is broken, stretched, or visibly worn, our technicians will replace it safely and restore proper balance to your door.",
    signs: [
      "Loud bang noise followed by the door no longer opening",
      "Visible gap or separation in the spring coil",
      "Door feels extremely heavy when lifted manually",
      "Door closes too fast or slams shut",
      "Cables appear loose or out of place near the spring",
    ],
    covered: [
      "Torsion spring replacement",
      "Extension spring replacement",
      "Cable inspection and replacement",
      "Door balance and tension adjustment",
      "Safety inspection of related hardware",
    ],
    faqs: [
      {
        question: "Why did my garage door spring break?",
        answer:
          "Springs wear out from repeated tension cycles over time. Age, lack of maintenance, and extreme temperature swings can all shorten their lifespan.",
      },
      {
        question: "Can I replace a garage door spring myself?",
        answer:
          "We don't recommend it. Torsion springs are under high tension and can cause serious injury if handled without the right tools and training.",
      },
      {
        question: "How long does a spring replacement take?",
        answer:
          "Most spring replacements are completed in a single visit, though exact timing depends on the door type and condition of related hardware.",
      },
      {
        question: "How do I know if I have torsion or extension springs?",
        answer:
          "Torsion springs are typically mounted horizontally above the closed door. Extension springs run along the upper tracks on either side. A technician can confirm during inspection.",
      },
      {
        question: "Should I replace one spring or both at the same time?",
        answer:
          "When one spring breaks, the other is usually close behind in wear. Many technicians recommend replacing both to avoid a second service call soon after.",
      },
      {
        question: "What happens if I keep using the door with a broken spring?",
        answer:
          "Operating a door with a broken spring puts extra strain on the opener and remaining hardware, and increases the risk of further damage or injury.",
      },
      {
        question: "Do new springs come with any kind of coverage?",
        answer:
          "Ask your technician about coverage for the specific spring and labor used in your replacement.",
      },
    ],
    costGuideLinkText:
      "Wondering what spring replacement runs in Los Angeles? Our garage door repair cost guide breaks down typical ranges by repair type.",
  },
  {
    slug: "garage-door-off-track-repair",
    title: "Garage Door Off Track Repair",
    keyword: "Garage Door Off Track Repair",
    description:
      "Is your garage door off its track? We fix off-track garage doors quickly and safely to restore smooth operation.",
    quickAnswer:
      "Garage door off its track? Garage Door Repairs realigns and repairs off-track doors across Los Angeles, with 24-hour service availability since this is often unsafe to leave unaddressed. Call (424) 387-4585 for help.",
    intro:
      "A garage door that has slipped off its track can be jammed, dangerous to operate, and difficult to secure. Our technicians realign or repair the track system so your door runs smoothly again.",
    signs: [
      "Door is visibly crooked or hanging unevenly",
      "Door gets stuck partway through opening or closing",
      "Rollers are visibly outside the track",
      "Grinding or scraping sound near the tracks",
      "Gaps appear between the door panel and track",
    ],
    covered: [
      "Track realignment",
      "Bent track repair or replacement",
      "Roller inspection and replacement",
      "Hardware tightening and adjustment",
      "Full operational safety check",
    ],
    faqs: [
      {
        question: "Is it dangerous to use a door that's off its track?",
        answer:
          "Yes. An off-track door can fall unexpectedly or jam in a way that's difficult to secure. Avoid operating it until it's inspected.",
      },
      {
        question: "What usually causes a door to come off track?",
        answer:
          "Common causes include worn rollers, bent track sections, an obstruction during operation, or impact damage from a vehicle.",
      },
      {
        question: "Can the track be repaired, or does it need full replacement?",
        answer:
          "It depends on the extent of the damage. Many off-track issues are resolved with realignment, while bent or damaged sections may need replacement.",
      },
      {
        question: "Can I push the door back onto the track myself?",
        answer:
          "We don't recommend it. Forcing a door back onto a track can cause further damage or injury. It's safer to have a technician assess and correct it.",
      },
      {
        question: "Will my door come off track again after repair?",
        answer:
          "Proper realignment and addressing the root cause (worn rollers, bent track, etc.) significantly reduces the chance of recurrence.",
      },
      {
        question: "Is an off-track door covered by homeowner's insurance?",
        answer:
          "Coverage varies by policy and cause of damage. Check with your insurance provider about your specific situation.",
      },
      {
        question: "How quickly should I get an off-track door looked at?",
        answer:
          "Treat it as urgent. An off-track door can be unsafe to operate and may worsen if used before repair.",
      },
    ],
    costGuideLinkText:
      "Pricing for off-track repair depends a lot on severity. Our Los Angeles cost guide explains what affects the final price.",
  },
  {
    slug: "garage-door-replacement",
    title: "Garage Door Replacement",
    keyword: "Garage Door Replacement",
    description:
      "Full garage door replacement services. Wide selection of styles and materials installed by licensed professionals.",
    quickAnswer:
      "Considering garage door replacement? Garage Door Repairs installs new doors across Los Angeles, with style and material options to fit your home and budget. Call (424) 387-4585 for a free estimate.",
    intro:
      "Sometimes repair isn't enough — an older, damaged, or inefficient garage door is best replaced entirely. We help you choose a door that fits your home and budget, then handle the full installation.",
    signs: [
      "Door has extensive rust, rot, or structural damage",
      "Repairs are becoming frequent or costly",
      "Door no longer matches your home's style or insulation needs",
      "Door is significantly outdated or hard to find parts for",
      "You're renovating or upgrading curb appeal",
    ],
    covered: [
      "Door style and material consultation",
      "Full door removal and installation",
      "Track and hardware replacement",
      "Opener compatibility check",
      "Final safety and balance testing",
    ],
    faqs: [
      {
        question: "How do I know if I need a repair or a full replacement?",
        answer:
          "If damage is limited to a single part, repair is often the better value. If the door is old, damaged in multiple areas, or inefficient, replacement may make more sense. We can advise after an inspection.",
      },
      {
        question: "Can you match my home's existing style?",
        answer:
          "We offer a range of styles and materials and can help you choose an option that complements your home.",
      },
      {
        question: "Will my existing opener work with a new door?",
        answer:
          "In many cases, yes. We check opener compatibility as part of the replacement process and advise if an upgrade is needed.",
      },
      {
        question: "What factors affect garage door replacement cost?",
        answer:
          "Door size, material, insulation level, and style all affect price, along with any track or opener upgrades needed. A technician can give specifics after assessing your setup.",
      },
      {
        question: "How long does a full door replacement take?",
        answer:
          "Most residential replacements are completed in a single day, though older or non-standard openings may take longer.",
      },
      {
        question: "Can I keep my old opener with a new door?",
        answer:
          "Often yes, as long as it's compatible and in good working condition. We check this during the replacement process.",
      },
      {
        question: "Do you remove and dispose of the old door?",
        answer:
          "Yes, removal and disposal of the old door is part of a standard replacement service.",
      },
    ],
    costGuideLinkText:
      "Replacement costs vary widely by door size and material. See our Los Angeles pricing guide for typical ranges and what drives the final cost.",
  },
  {
    slug: "emergency-garage-door-repair",
    title: "Emergency Garage Door Repair",
    keyword: "Emergency Garage Door Repair",
    description:
      "24/7 emergency garage door repair. Stuck, broken, or unsafe door? We respond fast to get you secure again.",
    quickAnswer:
      "Garage door stuck, unsafe, or not closing? Garage Door Repairs provides 24-hour service availability for stuck doors, broken springs, opener issues, off-track doors, and garage door replacement. Call (424) 387-4585 for help.",
    intro:
      "A garage door that won't close is a security risk that can't wait. Our emergency repair service is built to respond quickly when your door is stuck, broken, or unsafe to leave as-is.",
    signs: [
      "Door is stuck open and won't close",
      "Door fell or came off the track suddenly",
      "Spring snapped and door is inoperable",
      "Door won't fully secure, leaving your home exposed",
      "Opener failure during severe weather",
    ],
    covered: [
      "Emergency diagnostic and temporary securing",
      "Broken spring and cable repair",
      "Off-track and jammed door repair",
      "Opener emergency troubleshooting",
      "Same-visit repair when parts allow",
    ],
    faqs: [
      {
        question: "What counts as a garage door emergency?",
        answer:
          "Any situation where your door won't close, is stuck open, or poses an immediate safety or security risk is treated as urgent. Call us and explain the situation.",
      },
      {
        question: "Can you respond outside normal business hours?",
        answer:
          "Call us to check current emergency availability in your area. We prioritize urgent security and safety issues.",
      },
      {
        question: "What should I do while waiting for a technician?",
        answer:
          "Avoid forcing the door manually. If possible, secure the opening temporarily and keep people and vehicles clear of the door path.",
      },
      {
        question: "Is it safe to force a stuck garage door open or closed?",
        answer:
          "No. Forcing a stuck door can cause further damage to springs, cables, or the opener, and creates a real risk of injury. Wait for a technician.",
      },
      {
        question: "Do you charge more for emergency or after-hours calls?",
        answer:
          "Pricing for urgent visits can differ from scheduled appointments. Call us for accurate pricing information for your specific situation.",
      },
      {
        question: "Can a broken garage door affect my home's security?",
        answer:
          "Yes. A door that won't close fully leaves your garage and often an attached entry point exposed. Treat this as a priority repair.",
      },
      {
        question: "What counts as urgent enough to call right away?",
        answer:
          "Any door that's stuck open, has a snapped spring or cable, or came off its track should be treated as urgent. Call us and describe the situation.",
      },
    ],
    costGuideLinkText:
      "Emergency calls can cost more than a scheduled visit. Our Los Angeles cost guide explains how after-hours pricing typically works.",
  },
  {
    slug: "garage-door-opener",
    title: "Garage Door Opener",
    keyword: "Garage Door Opener",
    description:
      "Garage door opener installation and repair. Compatible with all major brands and smart home systems.",
    quickAnswer:
      "Garage door opener not responding? Garage Door Repairs diagnoses and repairs remote, keypad, and motor issues across Los Angeles, with 24-hour service availability. Call (424) 387-4585 for help.",
    intro:
      "Your garage door opener is the part you interact with every day. From unresponsive remotes to full motor failure, our technicians diagnose opener issues and install new systems when needed.",
    signs: [
      "Remote or wall switch doesn't respond",
      "Opener runs but door doesn't move",
      "Door reverses unexpectedly during operation",
      "Opener makes excessive noise during operation",
      "Smart features or app connection stopped working",
    ],
    covered: [
      "Opener diagnostics and repair",
      "Motor and gear replacement",
      "Remote and keypad programming",
      "Safety sensor alignment",
      "New opener installation, including smart-home compatible units",
    ],
    faqs: [
      {
        question: "My opener makes noise but the door doesn't move. What's wrong?",
        answer:
          "This often points to a stripped gear or drive issue inside the opener unit. A technician can confirm the cause and recommend repair or replacement.",
      },
      {
        question: "Can you install a smart garage door opener?",
        answer:
          "Yes, we install opener systems with smartphone app and smart-home compatibility where supported by your setup.",
      },
      {
        question: "Do you work with all opener brands?",
        answer:
          "We work with a wide range of residential opener brands. Let us know your current brand and model when you call.",
      },
      {
        question: "Should I repair or replace my garage door opener?",
        answer:
          "If the motor or main drive has failed, replacement is often more practical than repair. Minor issues like sensor alignment or remote programming are usually repairable.",
      },
      {
        question: "Why does my opener's remote work sometimes but not always?",
        answer:
          "Inconsistent response often points to a weak battery, antenna issue, or interference. A technician can test the full system to isolate the cause.",
      },
      {
        question: "Can you reprogram my existing remotes to a new opener?",
        answer:
          "In most cases, yes, as long as the remotes are compatible with the new opener system.",
      },
      {
        question: "What's involved in opener safety sensor alignment?",
        answer:
          "The two sensors at the base of the track need a clear, aligned line of sight to each other. Misalignment can cause the door to refuse to close or reverse unexpectedly.",
      },
    ],
    costGuideLinkText:
      "Opener repair cost depends on the brand and the specific issue. Check our Los Angeles cost guide for general pricing factors.",
  },
  {
    slug: "preventive-maintenance",
    title: "Preventive Maintenance",
    keyword: "Garage Door Preventive Maintenance",
    description:
      "Routine garage door maintenance to prevent costly breakdowns and extend the life of your garage door system.",
    quickAnswer:
      "Want to avoid costly garage door breakdowns? Garage Door Repairs offers routine maintenance across Los Angeles to catch wear early. Call (424) 387-4585 to schedule a visit.",
    intro:
      "Most major garage door repairs start as small, preventable issues. Routine maintenance helps catch wear before it leads to a breakdown, keeping your door safer and extending its lifespan.",
    signs: [
      "It's been over a year since your last inspection",
      "Door operation feels slightly rougher than before",
      "Minor noises that haven't been checked",
      "Hardware hasn't been lubricated recently",
      "You want to avoid unexpected repair costs",
    ],
    covered: [
      "Full hardware inspection",
      "Spring tension and balance check",
      "Lubrication of rollers, hinges, and tracks",
      "Sensor and auto-reverse safety testing",
      "Tightening of bolts and mounting hardware",
    ],
    faqs: [
      {
        question: "How often should a garage door be serviced?",
        answer:
          "Most manufacturers recommend an annual inspection, though doors used heavily may benefit from more frequent checks.",
      },
      {
        question: "Does maintenance really prevent breakdowns?",
        answer:
          "Routine maintenance catches worn hardware and balance issues early, which reduces the chance of a sudden failure like a snapped cable or spring.",
      },
      {
        question: "What's included in a maintenance visit?",
        answer:
          "A technician inspects, lubricates, and tests the major components of your door and opener system, and flags anything that needs repair.",
      },
      {
        question: "Can maintenance extend the life of my garage door?",
        answer:
          "Yes. Keeping hardware lubricated and properly adjusted reduces wear on springs, rollers, and the opener, which can meaningfully extend service life.",
      },
      {
        question: "Is maintenance worth it if my door seems fine?",
        answer:
          "Many issues develop gradually and aren't obvious until something fails. Maintenance catches early wear before it becomes a bigger repair.",
      },
      {
        question: "Do you check the auto-reverse safety feature during maintenance?",
        answer:
          "Yes, testing the auto-reverse and safety sensor function is a standard part of a maintenance visit.",
      },
      {
        question: "How long does a typical maintenance visit take?",
        answer:
          "Most maintenance visits take under an hour, depending on the door's condition and any adjustments needed.",
      },
    ],
  },
  {
    slug: "track-and-roller-replacement",
    title: "Track and Roller Replacement",
    keyword: "Garage Door Track and Roller Replacement",
    description:
      "Worn tracks and rollers cause noisy, unsafe doors. We replace tracks and rollers for smooth, quiet operation.",
    quickAnswer:
      "Garage door noisy or moving unevenly? Garage Door Repairs replaces worn tracks and rollers across Los Angeles for smooth, quiet operation. Call (424) 387-4585 for help.",
    intro:
      "Tracks and rollers guide your garage door through every open and close cycle. When they wear out or bend, the door becomes noisy, uneven, or difficult to operate. We replace and realign these parts to restore smooth performance.",
    signs: [
      "Loud rolling or grinding noise during operation",
      "Door moves unevenly or jerks during travel",
      "Visible rust, dents, or bends in the track",
      "Rollers look cracked, worn, or misshapen",
      "Door vibrates more than usual during operation",
    ],
    covered: [
      "Track inspection and replacement",
      "Roller replacement (steel or nylon)",
      "Track realignment and leveling",
      "Hinge and bracket inspection",
      "Final smooth-operation testing",
    ],
    faqs: [
      {
        question: "How long do garage door rollers typically last?",
        answer:
          "Roller lifespan varies by material and usage, but most show noticeable wear after several years of regular use.",
      },
      {
        question: "Will replacing rollers make my door quieter?",
        answer:
          "Worn rollers are a common source of noise. Replacing them, especially with nylon rollers, often reduces operating noise.",
      },
      {
        question: "Can a bent track be straightened instead of replaced?",
        answer:
          "Minor bends are sometimes correctable, but significantly damaged track sections are usually replaced to ensure safe, reliable operation.",
      },
      {
        question: "What's the difference between steel and nylon rollers?",
        answer:
          "Nylon rollers tend to run quieter and require less lubrication, while steel rollers are often more durable under heavy use. A technician can recommend based on your door and usage.",
      },
      {
        question: "Can worn rollers damage the track over time?",
        answer:
          "Yes. Worn or misshapen rollers can put uneven stress on the track, accelerating wear and increasing the chance of the door coming off track.",
      },
      {
        question: "How often should tracks and rollers be inspected?",
        answer:
          "An annual inspection is a reasonable baseline, with more frequent checks for doors used heavily throughout the day.",
      },
      {
        question: "Will replacing rollers fix a door that's hard to lift?",
        answer:
          "If the difficulty is due to roller friction, yes. If it's due to a spring issue, roller replacement alone won't resolve it. A technician can confirm the cause.",
      },
    ],
  },
];

export type LocationPageDef = {
  slug: string;
  name: string;
  region: string;
  intro?: string;
  commonProblems?: ProblemItem[];
  nearbyAreas?: string[];
  faqs?: FaqItem[];
};

// Slugs match the real, live WordPress URLs confirmed via page-sitemap.xml.
// Do not change these back to bare city slugs (e.g. "banning") - those URLs
// never existed on the old site and returned 404 when audited. See
// ../current-site/MIGRATION_URL_CORRECTION_REPORT.md for the full audit trail.
export const locationPages: LocationPageDef[] = [
  { slug: "garage-door-technician-banning", name: "Banning", region: "Riverside County" },
  { slug: "garage-door-repair-agoura-hills", name: "Agoura Hills", region: "Los Angeles County" },
  {
    slug: "garage-door-maintenance-beaumont",
    name: "Beaumont",
    region: "Riverside County",
    intro:
      "Beaumont sits in the Inland Empire's San Gorgonio Pass, an area known for strong seasonal winds and hot, dry summers. We serve homeowners and properties in Beaumont and nearby areas, with availability that may vary by schedule.",
    commonProblems: [
      {
        problem: "Wind-driven door slamming and hardware stress",
        solution:
          "The Pass area's strong wind gusts can slam doors shut or put extra stress on hinges and tracks. We inspect for wind-related wear during service calls.",
      },
      {
        problem: "Heat-affected opener electronics",
        solution:
          "Sustained summer heat in this area can stress opener circuit boards over time. We check for heat-related wear as part of opener diagnostics.",
      },
      {
        problem: "Newer development door settling",
        solution:
          "Many Beaumont homes are part of newer planned communities, where doors can need minor adjustment as foundations settle in the first few years.",
      },
    ],
    nearbyAreas: ["Banning", "Calimesa", "Cherry Valley", "Yucaipa"],
    faqs: [
      {
        question: "Do you offer garage door repair in Beaumont?",
        answer:
          "Yes, we serve homeowners and properties in Beaumont and nearby areas. Call to confirm availability for your address.",
      },
      {
        question: "Does Pass-area wind really damage garage doors?",
        answer:
          "Strong, sustained wind gusts common in the San Gorgonio Pass can stress hinges and tracks over time, especially on older doors.",
      },
      {
        question: "Can you help with emergency garage door repair in Beaumont?",
        answer:
          "Yes, urgent issues like a stuck door or broken spring are treated as priority calls. Call us and describe the situation.",
      },
      {
        question: "Do you repair garage door springs in Beaumont?",
        answer: "Yes, spring repair and replacement is available as part of our coverage in this area.",
      },
      {
        question: "Do you service garage door openers in Beaumont?",
        answer: "Yes, opener diagnostics, repair, and installation are available in this area.",
      },
      {
        question: "How do I request service in Beaumont?",
        answer: "Call us directly or use our contact form with your address and a description of the issue.",
      },
    ],
  },
  {
    slug: "garage-door-fixing-alhambra",
    name: "Alhambra",
    region: "Los Angeles County",
    intro:
      "Alhambra's dense San Gabriel Valley housing stock includes many homes built from the 1920s through the 1960s, often with original or early-replacement garage doors. We serve homeowners and properties in Alhambra and nearby areas, with availability that may vary.",
    commonProblems: [
      {
        problem: "Older single-car door hardware fatigue",
        solution:
          "Many Alhambra homes have narrower, older single-car doors where original hardware is reaching the end of its service life. We assess repair versus replacement.",
      },
      {
        problem: "Tight-lot garage clearance",
        solution:
          "Smaller, closely-spaced lots common in this area can mean limited clearance for opener and track installation. We assess clearance before recommending equipment.",
      },
      {
        problem: "Street parking activity affecting door wear",
        solution:
          "Dense residential blocks with frequent garage use see more daily door cycles, which can accelerate wear on springs and rollers.",
      },
    ],
    nearbyAreas: ["San Gabriel", "Monterey Park", "South Pasadena", "Pasadena"],
    faqs: [
      {
        question: "Do you offer garage door repair in Alhambra?",
        answer:
          "Yes, we serve homeowners and properties in Alhambra and nearby areas. Call to confirm availability for your address.",
      },
      {
        question: "Can you work on older single-car garage doors?",
        answer:
          "Yes, we regularly service the narrower, older single-car doors common in Alhambra's established neighborhoods.",
      },
      {
        question: "Do tight lots affect garage door service in Alhambra?",
        answer:
          "Sometimes. We assess clearance for opener and track installation before recommending equipment on closely-spaced lots.",
      },
      {
        question: "Can you help with emergency garage door repair in Alhambra?",
        answer: "Yes, urgent issues are treated as priority calls. Call us and describe the situation.",
      },
      {
        question: "Do you repair garage door springs in Alhambra?",
        answer: "Yes, spring repair and replacement is one of our most common service calls in this area.",
      },
      {
        question: "How do I request service in Alhambra?",
        answer: "Call us directly or use our contact form with your address and a description of the issue.",
      },
    ],
  },
  {
    slug: "garage-door-repair-in-arcadia",
    name: "Arcadia",
    region: "Los Angeles County",
    intro:
      "Arcadia's mix of established larger-lot homes near Santa Anita and newer construction means garage door sizes and styles vary significantly across the city. We serve homeowners and properties in Arcadia and nearby areas, with availability that may vary.",
    commonProblems: [
      {
        problem: "Wider double-door spring sizing",
        solution:
          "Larger-lot homes in Arcadia often have wider double-car doors that need correctly rated springs. Incorrect tension is a common cause of premature failure on wider doors.",
      },
      {
        problem: "Established home opener replacement",
        solution:
          "Many long-established Arcadia properties have opener systems reaching typical end-of-life age, often best addressed with full replacement.",
      },
      {
        problem: "Foothill-adjacent debris affecting tracks",
        solution:
          "Properties closer to the foothills can see more dust and debris buildup in tracks, which affects smooth operation if not cleared periodically.",
      },
    ],
    nearbyAreas: ["Pasadena", "Monrovia", "Sierra Madre", "Temple City"],
    faqs: [
      {
        question: "Do you offer garage door repair in Arcadia?",
        answer:
          "Yes, we serve homeowners and properties in Arcadia and nearby areas. Call to confirm availability for your address.",
      },
      {
        question: "Do wider double-car doors need different springs?",
        answer:
          "Yes, properly rated springs for the door's width and weight are essential. We verify correct sizing during any spring service.",
      },
      {
        question: "Can you replace older opener systems in Arcadia?",
        answer: "Yes, we assess opener age and condition and recommend repair or full replacement.",
      },
      {
        question: "Does foothill debris affect garage door tracks?",
        answer:
          "It can. Properties closer to the foothills may see more dust buildup in tracks, which we check during service.",
      },
      {
        question: "Do you repair garage door springs in Arcadia?",
        answer: "Yes, spring repair and replacement is available as part of our coverage in this area.",
      },
      {
        question: "How do I request service in Arcadia?",
        answer: "Call us directly or use our contact form with your address and a description of the issue.",
      },
    ],
  },
  {
    slug: "garage-door-repair-in-blythe",
    name: "Blythe",
    region: "Riverside County",
    intro:
      "Blythe's desert climate near the Colorado River means extreme summer heat is the dominant factor in garage door wear and performance. We serve homeowners and properties in Blythe and nearby areas, with availability that may vary by schedule.",
    commonProblems: [
      {
        problem: "Extreme heat affecting opener and sensor performance",
        solution:
          "Desert summer temperatures well above 100°F can stress opener motors and safety sensors. We check for heat-related wear and recommend heat-rated components where helpful.",
      },
      {
        problem: "Sun-exposed door material expansion",
        solution:
          "Metal doors exposed to intense desert sun can expand slightly during the day, sometimes affecting fit and operation. We adjust tracks to accommodate seasonal changes.",
      },
      {
        problem: "Dust and sand infiltration in tracks",
        solution:
          "Desert dust and occasional sandstorms can work into tracks and rollers, increasing friction and noise. Regular cleaning and lubrication helps manage this.",
      },
    ],
    nearbyAreas: ["Ehrenberg", "Quartzsite", "Ripley", "Palo Verde"],
    faqs: [
      {
        question: "Do you offer garage door repair in Blythe?",
        answer:
          "Yes, we serve homeowners and properties in Blythe and nearby areas. Call to confirm availability for your address.",
      },
      {
        question: "Does extreme desert heat affect garage door openers?",
        answer:
          "Yes, sustained high temperatures can stress opener motors and safety sensors. We check for heat-related wear during service.",
      },
      {
        question: "Can sand and dust damage garage door tracks?",
        answer:
          "Yes, desert dust and occasional sandstorms can increase friction in tracks and rollers. Regular cleaning and lubrication helps manage this.",
      },
      {
        question: "Can you help with emergency garage door repair in Blythe?",
        answer: "Yes, urgent issues are treated as priority calls. Call us and describe the situation.",
      },
      {
        question: "Do you repair garage door springs in Blythe?",
        answer: "Yes, spring repair and replacement is available as part of our coverage in this area.",
      },
      {
        question: "How do I request service in Blythe?",
        answer: "Call us directly or use our contact form with your address and a description of the issue.",
      },
    ],
  },
  {
    slug: "garage-door-fixing-adelanto",
    name: "Adelanto",
    region: "San Bernardino County",
    intro:
      "Adelanto's High Desert location brings wide temperature swings between day and night, along with many newer residential developments. We serve homeowners and properties in Adelanto and nearby areas, with availability that may vary.",
    commonProblems: [
      {
        problem: "Day-night temperature swings affecting hardware",
        solution:
          "High Desert temperature swings between hot days and cool nights can cause metal components to expand and contract, gradually affecting alignment.",
      },
      {
        problem: "Newer development opener and door pairing issues",
        solution:
          "Many Adelanto homes are part of newer developments where builder-installed openers sometimes need adjustment or upgrade within the first several years.",
      },
      {
        problem: "Windblown dust affecting smooth operation",
        solution:
          "Open desert terrain means more airborne dust reaching tracks and rollers. We recommend more frequent lubrication in this environment.",
      },
    ],
    nearbyAreas: ["Victorville", "Hesperia", "Apple Valley", "Phelan"],
    faqs: [
      {
        question: "Do you offer garage door repair in Adelanto?",
        answer:
          "Yes, we serve homeowners and properties in Adelanto and nearby areas. Call to confirm availability for your address.",
      },
      {
        question: "Do High Desert temperature swings affect garage doors?",
        answer:
          "Yes, the gap between hot days and cool nights can cause metal components to expand and contract, gradually affecting alignment.",
      },
      {
        question: "Can you service newer builder-installed openers?",
        answer:
          "Yes, we work on opener systems installed by builders in newer developments and can recommend adjustments or upgrades as needed.",
      },
      {
        question: "Can you help with emergency garage door repair in Adelanto?",
        answer: "Yes, urgent issues are treated as priority calls. Call us and describe the situation.",
      },
      {
        question: "Do you repair garage door springs in Adelanto?",
        answer: "Yes, spring repair and replacement is available as part of our coverage in this area.",
      },
      {
        question: "How do I request service in Adelanto?",
        answer: "Call us directly or use our contact form with your address and a description of the issue.",
      },
    ],
  },
  {
    slug: "garage-door-maintenance-aliso-viejo",
    name: "Aliso Viejo",
    region: "Orange County",
    intro:
      "Aliso Viejo is a largely master-planned community with homes built primarily from the 1990s onward, meaning garage doors here tend to be more uniform in age and style than older cities. We serve homeowners and properties in Aliso Viejo and nearby areas, with availability that may vary.",
    commonProblems: [
      {
        problem: "Planned-community door fleet aging together",
        solution:
          "Because many homes were built in the same development era, doors and openers across the area often need service around the same time. We see this pattern across several Aliso Viejo neighborhoods.",
      },
      {
        problem: "HOA-standard door style replacement matching",
        solution:
          "Many Aliso Viejo communities have HOA-guided exterior standards. We help identify replacement options that fit community style requirements.",
      },
      {
        problem: "Coastal-canyon humidity affecting hardware",
        solution:
          "Aliso Viejo's canyon location can trap morning marine moisture, which over time may contribute to gradual hardware wear if not addressed with routine maintenance.",
      },
    ],
    nearbyAreas: ["Laguna Niguel", "Mission Viejo", "Laguna Hills", "Lake Forest"],
    faqs: [
      {
        question: "Do you offer garage door repair in Aliso Viejo?",
        answer:
          "Yes, we serve homeowners and properties in Aliso Viejo and nearby areas. Call to confirm availability for your address.",
      },
      {
        question: "Can you match HOA exterior style requirements?",
        answer:
          "Yes, we help identify door replacement options that fit community style guidelines where applicable.",
      },
      {
        question: "Does canyon humidity affect garage door hardware?",
        answer:
          "It can. Trapped morning marine moisture in canyon areas may contribute to gradual hardware wear if not addressed with routine maintenance.",
      },
      {
        question: "Can you help with emergency garage door repair in Aliso Viejo?",
        answer: "Yes, urgent issues are treated as priority calls. Call us and describe the situation.",
      },
      {
        question: "Do you repair garage door springs in Aliso Viejo?",
        answer: "Yes, spring repair and replacement is available as part of our coverage in this area.",
      },
      {
        question: "How do I request service in Aliso Viejo?",
        answer: "Call us directly or use our contact form with your address and a description of the issue.",
      },
    ],
  },
];

export type QuestionablePageDef = {
  slug: string;
  title: string;
  description: string;
};

export type LegalPageDef = {
  slug: string;
  title: string;
};

export const legalPages: LegalPageDef[] = [
  { slug: "privacy-policy", title: "Privacy Policy" },
  { slug: "terms-and-conditions", title: "Terms and Conditions" },
];

export const questionablePages: QuestionablePageDef[] = [
  {
    slug: "sliding-door-repairs",
    title: "Sliding Door Repairs",
    description:
      "Sliding door repair services. This page is under SEO review and content is being finalized.",
  },
  {
    slug: "stainless-steel-cover-track",
    title: "Stainless Steel Cover Track",
    description:
      "Stainless steel cover track services. This page is under SEO review and content is being finalized.",
  },
  {
    slug: "lock-and-handle-repair",
    title: "Lock and Handle Repair",
    description:
      "Lock and handle repair services. This page is under SEO review and content is being finalized.",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Call or Request Service",
    description:
      "Reach out by phone or contact form and tell us what's going on with your garage door.",
  },
  {
    step: "02",
    title: "Diagnosis On Arrival",
    description:
      "A technician inspects the door and opener system to identify the exact cause of the problem.",
  },
  {
    step: "03",
    title: "Clear Options, No Pressure",
    description:
      "You'll know the repair options and pricing before any work begins, so there are no surprises.",
  },
  {
    step: "04",
    title: "Repair and Final Test",
    description:
      "We complete the repair and test the door fully to confirm safe, smooth operation before we leave.",
  },
];

export type TrustPoint = {
  title: string;
  description: string;
};

export const trustPoints: TrustPoint[] = [
  {
    title: "Local Los Angeles Team",
    description: "Technicians familiar with LA homes, garages, and door types.",
  },
  {
    title: "Clear, Upfront Pricing",
    description: "You'll know repair options and pricing before work begins.",
  },
  {
    title: "Safety-First Repairs",
    description: "Garage door springs and hardware handled with proper training and care.",
  },
  {
    title: "Wide Range of Services",
    description: "From emergency repairs to full replacement and routine maintenance.",
  },
];

export type ProblemItem = {
  problem: string;
  solution: string;
};

export const commonProblems: ProblemItem[] = [
  {
    problem: "Door won't open or close",
    solution:
      "Often caused by a broken spring, opener failure, or obstruction in the track. We diagnose the exact cause before repairing.",
  },
  {
    problem: "Loud grinding or banging noises",
    solution:
      "Usually points to worn rollers, loose hardware, or a spring under stress. Left unaddressed, this can lead to a bigger failure.",
  },
  {
    problem: "Door is off its track",
    solution:
      "An off-track door can be unsafe to operate. We realign or repair the track system to restore safe operation.",
  },
  {
    problem: "Remote or opener not responding",
    solution:
      "Could be a programming issue, dead battery, or a failing opener motor. We test the full system to find the source.",
  },
];

export type AppreciationPoint = {
  title: string;
  description: string;
};

export const whyHomeownersChooseUs: AppreciationPoint[] = [
  {
    title: "15+ Years of Experience",
    description:
      "Years of hands-on experience diagnosing and repairing garage doors of all types across Los Angeles.",
  },
  {
    title: "Free Estimates",
    description:
      "Get clear pricing information before committing to a repair, replacement, or maintenance visit.",
  },
  {
    title: "Available 24/7",
    description:
      "Garage door problems don't wait for business hours, so our team is reachable around the clock.",
  },
  {
    title: "Straightforward Communication",
    description:
      "We explain what's wrong and what it takes to fix it before any work begins, no pressure tactics.",
  },
];

export type BlogPostDef = {
  slug: string;
  title: string;
  description: string;
  quickAnswer: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: FaqItem[];
  relatedServiceSlug: string;
  // Optional sentence linking to the LA cost guide. Rendered only when
  // present, scoped to this one post - does not affect other posts.
  costGuideLinkText?: string;
};

// Slugs match real, live WordPress blog post URLs confirmed via post-sitemap.xml.
// Content rewritten cleanly; do not reintroduce contamination from the live site
// (Florida cities, Jess Flawless Sliding Doors, Native Garage Doors branding, etc).
export const blogPosts: BlogPostDef[] = [
  {
    slug: "garage-door-services-in-los-angeles-ca",
    title: "Garage Door Services in Los Angeles, CA",
    description:
      "An overview of the garage door services available to Los Angeles homeowners, from repair to full replacement.",
    quickAnswer:
      "Los Angeles homeowners can access garage door repair, spring replacement, opener service, and full door replacement from local providers like Garage Door Repairs, available 24 hours for urgent issues.",
    intro:
      "Los Angeles homeowners rely on a working garage door every day. Here's an overview of the most common services we provide across the city.",
    sections: [
      {
        heading: "Repair Services",
        body: "Most garage door issues come down to a handful of common causes: worn springs, misaligned tracks, or an aging opener. A trained technician can usually diagnose the issue on the first visit.",
      },
      {
        heading: "Replacement Services",
        body: "When a door is too damaged or outdated to repair cost-effectively, full replacement gives homeowners a chance to upgrade style, insulation, and security at the same time.",
      },
      {
        heading: "Maintenance Services",
        body: "Routine maintenance, like lubrication and hardware checks, helps catch small problems before they turn into expensive repairs.",
      },
    ],
    faqs: [
      {
        question: "What garage door services are most commonly needed in Los Angeles?",
        answer:
          "Spring replacement, opener repair, and off-track repair are among the most common service calls across Los Angeles homes.",
      },
      {
        question: "How do I choose between repair and replacement?",
        answer:
          "If the issue is isolated to one part and the door is otherwise in good shape, repair is usually the better value. Frequent repairs or significant damage may make replacement more practical.",
      },
      {
        question: "Is routine maintenance worth scheduling?",
        answer:
          "Yes. Routine maintenance catches small issues before they become costly repairs and helps the door and opener system last longer.",
      },
    ],
    relatedServiceSlug: "garage-door-repair-los-angeles",
  },
  {
    slug: "garage-door-replacement-in-los-angeles",
    title: "Garage Door Replacement in Los Angeles",
    description:
      "What to expect when replacing a garage door in Los Angeles, from choosing a style to installation day.",
    quickAnswer:
      "Replacing a garage door in Los Angeles typically involves choosing a style and material, scheduling a single-day installation, and confirming opener compatibility. Call Garage Door Repairs for a free estimate.",
    intro:
      "Replacing a garage door is a bigger decision than a repair, but it can solve recurring problems for good while improving your home's curb appeal.",
    sections: [
      {
        heading: "Signs It's Time to Replace",
        body: "Frequent repairs, visible rust or rot, and outdated styling are all signs a replacement may be more cost-effective than continued repairs.",
      },
      {
        heading: "Choosing a New Door",
        body: "Material, insulation value, and style all affect both price and long-term performance. A technician can walk through the tradeoffs for your home.",
      },
      {
        heading: "What Installation Day Looks Like",
        body: "Most residential garage door replacements are completed in a single day, including removal of the old door and full testing of the new one.",
      },
    ],
    faqs: [
      {
        question: "How long does garage door replacement take?",
        answer:
          "Most residential replacements are completed in a single day, including removal of the old door and full testing of the new one.",
      },
      {
        question: "What style options are available?",
        answer:
          "Options vary by material and manufacturer, including traditional raised-panel, carriage-style, and modern flush designs with different insulation levels.",
      },
      {
        question: "Will the new door work with my existing opener?",
        answer:
          "In many cases, yes. We check opener compatibility as part of the replacement process and advise if an upgrade is needed.",
      },
    ],
    relatedServiceSlug: "garage-door-replacement",
  },
  {
    slug: "comprehensive-guide-to-garage-door-repair-in-los-angeles-everything-you-need-to-know",
    title: "Comprehensive Guide to Garage Door Repair in Los Angeles",
    description:
      "A complete guide to garage door repair in Los Angeles, covering common problems, costs, and what to expect from a service visit.",
    quickAnswer:
      "Garage door repair in Los Angeles typically addresses broken springs, opener failures, off-track doors, and worn hardware. A technician inspects the system, identifies the cause, and explains repair options before starting work.",
    intro:
      "This guide covers what Los Angeles homeowners should know before scheduling a garage door repair, from common warning signs to what happens during a service visit.",
    sections: [
      {
        heading: "Common Warning Signs",
        body: "Slow operation, unusual noise, and visible wear on springs or cables are the most common early indicators that a repair is needed.",
      },
      {
        heading: "What a Service Visit Involves",
        body: "A technician inspects the door and opener system, identifies the cause of the issue, and explains repair options before any work begins.",
      },
      {
        heading: "When to Consider Replacement Instead",
        body: "If a door needs frequent repairs or has significant structural damage, full replacement may be the more cost-effective long-term option.",
      },
    ],
    faqs: [
      {
        question: "What are the most common garage door problems in Los Angeles?",
        answer:
          "Broken springs, opener failures, and off-track doors are among the most frequent issues reported across Los Angeles homes.",
      },
      {
        question: "How do I know if I need a repair or a replacement?",
        answer:
          "If damage is limited to one part, repair is often the better value. Frequent repairs or significant structural damage may make replacement more cost-effective.",
      },
      {
        question: "Can routine maintenance prevent major repairs?",
        answer:
          "Yes. Catching worn hardware and balance issues early through routine maintenance reduces the chance of a sudden failure.",
      },
    ],
    relatedServiceSlug: "garage-door-repair",
  },
  {
    slug: "how-much-does-a-garage-door-repair-cost",
    title: "How Much Does a Garage Door Repair Cost?",
    description:
      "A general look at what affects the cost of garage door repair, including parts, labor, and the type of repair needed.",
    quickAnswer:
      "Garage door repair costs vary based on the type of repair, parts needed, and door size. Spring and opener repairs are common service calls; call for pricing specific to your issue.",
    intro:
      "Garage door repair costs vary based on the specific issue, the parts involved, and the door type. Here's a general look at what affects pricing.",
    sections: [
      {
        heading: "What Affects Repair Cost",
        body: "The type of repair (spring, opener, track, panel) and the parts required are the biggest factors. Door size and material can also play a role.",
      },
      {
        heading: "Why Estimates Vary",
        body: "Every garage door setup is a little different, which is why an accurate quote usually requires a brief inspection rather than a price over the phone alone.",
      },
      {
        heading: "Getting an Accurate Quote",
        body: "Call our team and describe the issue you're experiencing. We can give you general guidance and confirm final pricing after taking a look at the door.",
      },
    ],
    faqs: [
      {
        question: "Why do garage door repair quotes vary so much?",
        answer:
          "Every setup is a little different. Door type, parts needed, and the specific repair all affect pricing, which is why an accurate quote usually requires a brief inspection.",
      },
      {
        question: "Are there ways to avoid expensive repairs?",
        answer:
          "Routine maintenance, like lubrication and hardware checks, helps catch small issues before they turn into costly repairs.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Call our team to discuss your repair and get pricing information before scheduling a visit.",
      },
    ],
    costGuideLinkText:
      "For a more detailed breakdown by repair type, see our complete Los Angeles garage door repair cost guide.",
    relatedServiceSlug: "garage-door-repair",
  },
  {
    slug: "how-much-does-it-really-cost-to-repair-a-garage-door-spring",
    title: "How Much Does It Really Cost to Repair a Garage Door Spring?",
    description:
      "What goes into the cost of garage door spring repair, including torsion vs. extension springs and why pricing varies.",
    quickAnswer:
      "Garage door spring repair cost depends on spring type (torsion vs. extension) and the condition of related hardware. Replacing both springs at once is often recommended even if only one has failed.",
    intro:
      "Spring repair is one of the most common garage door service calls. Cost depends largely on spring type and the condition of related hardware.",
    sections: [
      {
        heading: "Torsion vs. Extension Springs",
        body: "Torsion springs and extension springs differ in how they're installed and replaced, which can affect labor time and overall cost.",
      },
      {
        heading: "Why Springs Fail",
        body: "Springs wear out from repeated tension cycles over time. Age, lack of maintenance, and extreme temperature swings can all shorten their lifespan.",
      },
      {
        heading: "Why DIY Isn't Recommended",
        body: "Garage door springs are under high tension and can cause serious injury if handled without the right tools and training. Professional replacement is strongly recommended.",
      },
    ],
    faqs: [
      {
        question: "Is it cheaper to repair one spring or replace both?",
        answer:
          "Replacing both springs at once is often recommended, since the second spring is usually close behind in wear, which can avoid a second service call soon after.",
      },
      {
        question: "Can I replace a garage door spring myself to save money?",
        answer:
          "We don't recommend it. Torsion springs are under high tension and can cause serious injury without the right tools and training.",
      },
      {
        question: "What affects the final cost of spring repair?",
        answer:
          "Spring type, door size, and the condition of related hardware like cables and pulleys all factor into final pricing.",
      },
    ],
    costGuideLinkText:
      "See our Los Angeles garage door repair cost guide for a broader look at pricing across all repair types.",
    relatedServiceSlug: "garage-door-spring-replacement",
  },
];

export type NewCityPageDef = {
  slug: string;
  name: string;
  intro: string;
  commonProblemsHeading: string;
  commonProblems: ProblemItem[];
  nearbyAreas: string[];
  serviceOrder: string[];
  faqs: FaqItem[];
};

// These are NEW SEO location pages, not migrated WordPress URLs. Do not
// confuse with the 8 real migrated `locationPages` above. No physical
// office exists in any of these cities - service is availability-based.
// See ../docs/AI_SEO_OPTIMIZATION_PLAN.md for the full strategy.
export const newCityPages: NewCityPageDef[] = [
  {
    slug: "garage-door-repair-hollywood",
    name: "Hollywood",
    intro:
      "Hollywood's mix of hillside homes and older multi-unit buildings means garage doors here range from vintage single-panel doors to newer sectional systems. Our team serves homeowners and properties in Hollywood and nearby areas, with service availability that may vary by schedule and location.",
    commonProblemsHeading: "Common Garage Door Problems in Hollywood",
    commonProblems: [
      {
        problem: "Older single-panel doors sticking or binding",
        solution:
          "Many Hollywood homes still have original single-panel doors, which can bind on tracks as hardware ages. We inspect and adjust or recommend replacement when repair isn't cost-effective.",
      },
      {
        problem: "Steep driveway clearance issues",
        solution:
          "Hillside properties sometimes have tighter clearance, which can stress track alignment over time. We check alignment as part of any repair visit.",
      },
      {
        problem: "Shared-wall noise complaints in multi-unit buildings",
        solution:
          "Worn rollers are a common source of noise that's especially noticeable in attached units. Roller replacement often resolves this.",
      },
    ],
    nearbyAreas: ["Los Feliz", "Silver Lake", "West Hollywood", "Studio City"],
    serviceOrder: [
      "garage-door-repair",
      "garage-door-spring-replacement",
      "garage-door-off-track-repair",
      "garage-door-opener",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Hollywood?",
        answer:
          "Yes, we serve homeowners and properties in Hollywood and nearby areas. Call to confirm availability for your address.",
      },
      {
        question: "Can you work on older, original garage doors?",
        answer:
          "Yes, our technicians regularly work on older single-panel and sectional doors common in Hollywood's older housing stock.",
      },
      {
        question: "Do you handle emergency repairs in Hollywood?",
        answer:
          "Yes, urgent issues like a stuck door or broken spring are treated as priority calls. Call us and describe the situation.",
      },
      {
        question: "Do you repair garage door springs in Hollywood?",
        answer: "Yes, spring repair and replacement is available as part of our service area coverage.",
      },
      {
        question: "How do I request service in Hollywood?",
        answer:
          "Call us directly or use our contact form with your address and a description of the issue.",
      },
    ],
  },
  {
    slug: "garage-door-repair-west-hollywood",
    name: "West Hollywood",
    intro:
      "West Hollywood's dense mix of condos, townhomes, and detached garages means garage door issues here often involve tight installation spaces and shared driveways. We serve homeowners and properties in West Hollywood and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in West Hollywood",
    commonProblems: [
      {
        problem: "Tight-clearance opener installations",
        solution:
          "Condo and townhome garages often have limited ceiling clearance, which affects opener placement. We assess clearance before recommending a new opener.",
      },
      {
        problem: "Shared driveway track wear",
        solution:
          "Doors used more frequently in shared-access buildings show roller and track wear faster. We check these components during any service visit.",
      },
      {
        problem: "Remote interference from nearby units",
        solution:
          "Dense multi-unit buildings can occasionally cause remote signal interference. Reprogramming or a rolling-code remote often resolves this.",
      },
    ],
    nearbyAreas: ["Hollywood", "Beverly Hills", "West Los Angeles", "Silver Lake"],
    serviceOrder: [
      "garage-door-opener",
      "garage-door-repair",
      "garage-door-spring-replacement",
      "garage-door-replacement",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in West Hollywood?",
        answer:
          "Yes, we serve homeowners and properties in West Hollywood and nearby areas. Call to confirm availability for your address.",
      },
      {
        question: "Can you work on garages with tight clearance?",
        answer:
          "Yes, our technicians assess clearance and recommend opener and hardware options that fit the space.",
      },
      {
        question: "Do you service garage door openers in West Hollywood?",
        answer: "Yes, opener diagnostics, repair, and installation are part of our coverage in this area.",
      },
      {
        question: "Can you help with emergency garage door repair in West Hollywood?",
        answer: "Yes, urgent issues are treated as priority calls. Call us and describe the situation.",
      },
      {
        question: "How do I request service in West Hollywood?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-beverly-hills",
    name: "Beverly Hills",
    intro:
      "Beverly Hills homes often feature higher-end, custom garage door installations, including wood-clad and insulated steel doors with smart-home integration. We serve homeowners and properties in Beverly Hills and nearby areas, with availability that may vary by schedule.",
    commonProblemsHeading: "Common Garage Door Problems in Beverly Hills",
    commonProblems: [
      {
        problem: "Smart opener connectivity issues",
        solution:
          "Smart-home integrated openers can lose app connectivity after firmware updates or network changes. We troubleshoot connectivity as part of opener service.",
      },
      {
        problem: "Custom door panel damage",
        solution:
          "Higher-end wood-clad or custom panel doors require careful sourcing for repair. We assess whether a matching panel repair or full replacement is more practical.",
      },
      {
        problem: "Heavier insulated doors straining standard springs",
        solution:
          "Insulated doors are heavier than standard panels, which can accelerate spring wear if the system wasn't properly balanced for the door's weight.",
      },
    ],
    nearbyAreas: ["West Hollywood", "Brentwood", "West Los Angeles", "Santa Monica"],
    serviceOrder: [
      "garage-door-opener",
      "garage-door-replacement",
      "garage-door-spring-replacement",
      "preventive-maintenance",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Beverly Hills?",
        answer:
          "Yes, we serve homeowners and properties in Beverly Hills and nearby areas. Call to confirm availability.",
      },
      {
        question: "Can you work on custom or high-end garage doors?",
        answer:
          "Yes, we assess custom and higher-end doors and advise on repair versus replacement options.",
      },
      {
        question: "Do you troubleshoot smart garage door openers?",
        answer: "Yes, smart-home connected opener troubleshooting is part of our opener service.",
      },
      {
        question: "Do you repair garage door springs in Beverly Hills?",
        answer: "Yes, including systems balanced for heavier insulated doors.",
      },
      {
        question: "How do I request service in Beverly Hills?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-santa-monica",
    name: "Santa Monica",
    intro:
      "Santa Monica's coastal climate means salt air and moisture exposure are common factors in garage door wear, especially for homes closer to the beach. We serve homeowners and properties in Santa Monica and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in Santa Monica",
    commonProblems: [
      {
        problem: "Rust and corrosion from coastal air",
        solution:
          "Salt air accelerates rust on hardware and tracks, especially near the coastline. We inspect for corrosion and recommend rust-resistant hardware where needed.",
      },
      {
        problem: "Humidity affecting wood door panels",
        solution:
          "Coastal humidity can cause wood panels to swell or warp over time. We assess panel condition and recommend repair or sealing as appropriate.",
      },
      {
        problem: "Salt-air opener corrosion",
        solution:
          "Opener components exposed to salt air can corrode faster than inland installations. Regular maintenance helps catch this early.",
      },
    ],
    nearbyAreas: ["Brentwood", "Culver City", "West Los Angeles", "Beverly Hills"],
    serviceOrder: [
      "preventive-maintenance",
      "garage-door-repair",
      "track-and-roller-replacement",
      "garage-door-replacement",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Santa Monica?",
        answer:
          "Yes, we serve homeowners and properties in Santa Monica and nearby areas. Call to confirm availability.",
      },
      {
        question: "Does coastal air really affect garage doors?",
        answer:
          "Yes, salt air can accelerate rust and corrosion on hardware, tracks, and opener components, especially closer to the coast.",
      },
      {
        question: "Can you recommend more corrosion-resistant hardware?",
        answer: "Yes, we can advise on rust-resistant track and roller options suited to coastal exposure.",
      },
      {
        question: "Do you offer preventive maintenance in Santa Monica?",
        answer: "Yes, routine maintenance is especially useful here to catch early corrosion or wear.",
      },
      {
        question: "How do I request service in Santa Monica?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-culver-city",
    name: "Culver City",
    intro:
      "Culver City's blend of mid-century homes and newer townhome developments means garage door styles vary widely by block. We serve homeowners and properties in Culver City and nearby areas, with availability that may vary by schedule.",
    commonProblemsHeading: "Common Garage Door Problems in Culver City",
    commonProblems: [
      {
        problem: "Mid-century door hardware reaching end of life",
        solution:
          "Many original mid-century doors have hardware that's difficult to source for repair. We assess whether a compatible replacement part exists or full replacement is more practical.",
      },
      {
        problem: "Newer townhome opener compatibility",
        solution:
          "Newer developments sometimes use openers with limited compatibility for remote/keypad upgrades. We check compatibility before recommending upgrades.",
      },
      {
        problem: "Shared-wall noise in townhome garages",
        solution:
          "Townhome garages often share walls, making door noise more noticeable. Roller replacement and lubrication typically reduce this.",
      },
    ],
    nearbyAreas: ["Santa Monica", "West Los Angeles", "Beverly Hills", "Torrance"],
    serviceOrder: [
      "garage-door-repair",
      "garage-door-opener",
      "track-and-roller-replacement",
      "garage-door-replacement",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Culver City?",
        answer:
          "Yes, we serve homeowners and properties in Culver City and nearby areas. Call to confirm availability.",
      },
      {
        question: "Can you find parts for older mid-century garage doors?",
        answer:
          "We assess each door individually - some original hardware is replaceable, while others may be more practical to fully replace.",
      },
      {
        question: "Do you service openers in newer townhome developments?",
        answer: "Yes, we check opener compatibility before recommending any upgrades.",
      },
      {
        question: "Can you help with emergency garage door repair in Culver City?",
        answer: "Yes, urgent issues are treated as priority calls. Call us and describe the situation.",
      },
      {
        question: "How do I request service in Culver City?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-pasadena",
    name: "Pasadena",
    intro:
      "Pasadena's historic homes, many built in the early to mid-1900s, often feature original wood garage doors or early sectional conversions. We serve homeowners and properties in Pasadena and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in Pasadena",
    commonProblems: [
      {
        problem: "Historic wood door deterioration",
        solution:
          "Original wood doors in older Pasadena homes can develop rot, warping, or hardware fatigue over decades. We assess restoration versus replacement.",
      },
      {
        problem: "Foothill temperature swings affecting hardware",
        solution:
          "Pasadena's wider temperature range between seasons can affect metal expansion and contraction in tracks and springs. Regular inspection catches related wear early.",
      },
      {
        problem: "Detached garage structural settling",
        solution:
          "Older detached garages can settle over time, throwing off door alignment. We check alignment as part of any repair visit.",
      },
    ],
    nearbyAreas: ["Glendale", "Eagle Rock", "Burbank", "Los Feliz"],
    serviceOrder: [
      "garage-door-repair",
      "garage-door-replacement",
      "garage-door-off-track-repair",
      "preventive-maintenance",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Pasadena?",
        answer:
          "Yes, we serve homeowners and properties in Pasadena and nearby areas. Call to confirm availability.",
      },
      {
        question: "Can you repair original wood garage doors?",
        answer:
          "Yes, we assess wood doors for restoration versus replacement depending on condition.",
      },
      {
        question: "Do older detached garages need special assessment?",
        answer:
          "Yes, structural settling over time can affect door alignment, which we check during service.",
      },
      {
        question: "Do you repair garage door springs in Pasadena?",
        answer: "Yes, spring repair and replacement is available as part of our coverage in this area.",
      },
      {
        question: "How do I request service in Pasadena?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-glendale",
    name: "Glendale",
    intro:
      "Glendale's hillside neighborhoods and flatland tract homes both present different garage door challenges, from elevation-related wear to standard suburban sectional doors. We serve homeowners and properties in Glendale and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in Glendale",
    commonProblems: [
      {
        problem: "Hillside home door balance issues",
        solution:
          "Homes on sloped lots can have garages with uneven floor grades, which affects door balance over time. We adjust spring tension to compensate.",
      },
      {
        problem: "Tract home opener motor wear",
        solution:
          "Standard tract-home openers installed decades ago are reaching the end of typical service life across many Glendale neighborhoods. We assess repair versus replacement.",
      },
      {
        problem: "Track misalignment from settling foundations",
        solution:
          "Like much of the foothill-adjacent area, some homes experience minor foundation shifts that affect track alignment.",
      },
    ],
    nearbyAreas: ["Pasadena", "Burbank", "Eagle Rock", "North Hollywood"],
    serviceOrder: [
      "garage-door-spring-replacement",
      "garage-door-opener",
      "garage-door-off-track-repair",
      "garage-door-repair",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Glendale?",
        answer:
          "Yes, we serve homeowners and properties in Glendale and nearby areas. Call to confirm availability.",
      },
      {
        question: "Can you fix door balance issues on sloped lots?",
        answer: "Yes, we adjust spring tension to compensate for uneven garage floor grades.",
      },
      {
        question: "Do you replace older tract-home opener motors?",
        answer: "Yes, we assess opener age and condition and recommend repair or replacement.",
      },
      {
        question: "Do you handle off-track repairs in Glendale?",
        answer: "Yes, including issues related to minor foundation settling affecting track alignment.",
      },
      {
        question: "How do I request service in Glendale?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-burbank",
    name: "Burbank",
    intro:
      "Burbank's mix of media-industry adjacent homes and classic suburban tracts means garage usage often includes equipment storage alongside vehicles, adding wear to doors and openers. We serve homeowners and properties in Burbank and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in Burbank",
    commonProblems: [
      {
        problem: "Heavy-use doors from frequent garage access",
        solution:
          "Garages used for equipment storage or home offices see more daily door cycles, accelerating wear on springs and rollers.",
      },
      {
        problem: "Opener motor strain from added garage weight",
        solution:
          "Storage-heavy garages sometimes lead homeowners to add insulation or shelving that changes door weight distribution, which can strain the opener.",
      },
      {
        problem: "Standard suburban track wear",
        solution:
          "Classic tract-home doors installed decades ago commonly need track and roller replacement as a baseline maintenance item.",
      },
    ],
    nearbyAreas: ["Glendale", "North Hollywood", "Studio City", "Pasadena"],
    serviceOrder: [
      "track-and-roller-replacement",
      "garage-door-opener",
      "garage-door-spring-replacement",
      "preventive-maintenance",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Burbank?",
        answer:
          "Yes, we serve homeowners and properties in Burbank and nearby areas. Call to confirm availability.",
      },
      {
        question: "Does heavy garage use affect repair frequency?",
        answer:
          "Yes, garages used frequently for storage or as workspace see faster wear on springs and rollers.",
      },
      {
        question: "Can added garage weight strain the opener?",
        answer:
          "Yes, changes to door weight from insulation or shelving can affect opener strain over time. We assess this during service.",
      },
      {
        question: "Do you replace tracks and rollers in Burbank?",
        answer: "Yes, this is one of our most common service calls in older suburban tract homes.",
      },
      {
        question: "How do I request service in Burbank?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-studio-city",
    name: "Studio City",
    intro:
      "Studio City's hillside and flatland mix includes many homes with detached garages converted for additional living space, which changes how garage doors are used day to day. We serve homeowners and properties in Studio City and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in Studio City",
    commonProblems: [
      {
        problem: "Converted garage door sealing issues",
        solution:
          "Garages partially converted for storage or workspace sometimes have door seals that need attention to manage temperature and moisture.",
      },
      {
        problem: "Hillside lot drainage affecting hardware",
        solution:
          "Sloped lots can direct water toward garage door tracks during rain, accelerating rust if drainage isn't well managed.",
      },
      {
        problem: "Remote range issues in hillside terrain",
        solution:
          "Hilly terrain can affect remote signal range in some installations. Reprogramming or upgraded remotes often help.",
      },
    ],
    nearbyAreas: ["Sherman Oaks", "Encino", "Burbank", "North Hollywood"],
    serviceOrder: [
      "garage-door-repair",
      "garage-door-opener",
      "preventive-maintenance",
      "garage-door-off-track-repair",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Studio City?",
        answer:
          "Yes, we serve homeowners and properties in Studio City and nearby areas. Call to confirm availability.",
      },
      {
        question: "Can you help with door sealing on converted garages?",
        answer:
          "Yes, we assess sealing needs based on how the space is used.",
      },
      {
        question: "Does hillside drainage really affect garage doors?",
        answer:
          "Yes, water directed toward tracks during rain can accelerate rust if drainage isn't well managed.",
      },
      {
        question: "Do you fix remote range issues in hilly areas?",
        answer: "Yes, we troubleshoot signal issues and recommend reprogramming or upgraded remotes as needed.",
      },
      {
        question: "How do I request service in Studio City?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-sherman-oaks",
    name: "Sherman Oaks",
    intro:
      "Sherman Oaks' wide mix of single-family homes and newer construction means garage door age varies significantly block to block. We serve homeowners and properties in Sherman Oaks and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in Sherman Oaks",
    commonProblems: [
      {
        problem: "Mixed-age door fleets across neighborhoods",
        solution:
          "Because home ages vary widely, we see everything from decades-old doors needing full replacement to newer doors needing minor opener adjustments.",
      },
      {
        problem: "Valley heat affecting opener electronics",
        solution:
          "San Fernando Valley summer heat can stress opener circuit boards and sensors over time. We check for heat-related wear during service.",
      },
      {
        problem: "Two-car door balance differences",
        solution:
          "Homes with two single doors sometimes have mismatched spring tension between them. We balance both during a full inspection.",
      },
    ],
    nearbyAreas: ["Encino", "Studio City", "Van Nuys", "North Hollywood"],
    serviceOrder: [
      "garage-door-repair",
      "garage-door-replacement",
      "garage-door-opener",
      "garage-door-spring-replacement",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Sherman Oaks?",
        answer:
          "Yes, we serve homeowners and properties in Sherman Oaks and nearby areas. Call to confirm availability.",
      },
      {
        question: "Does Valley heat affect garage door openers?",
        answer:
          "Yes, sustained summer heat can stress circuit boards and sensors over time. We check for this during service.",
      },
      {
        question: "Can you balance two separate garage doors on one property?",
        answer: "Yes, we check and balance spring tension across both doors during a full inspection.",
      },
      {
        question: "Do you replace older garage doors in Sherman Oaks?",
        answer: "Yes, full replacement is available when repair isn't the more practical option.",
      },
      {
        question: "How do I request service in Sherman Oaks?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-encino",
    name: "Encino",
    intro:
      "Encino's larger residential lots often mean wider garage doors and heavier-duty hardware than standard suburban installations. We serve homeowners and properties in Encino and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in Encino",
    commonProblems: [
      {
        problem: "Wider door spring tension issues",
        solution:
          "Larger, wider garage doors require properly rated springs. Incorrect tension on a wide door is a common cause of premature failure.",
      },
      {
        problem: "Multi-car garage opener synchronization",
        solution:
          "Properties with multiple garage bays sometimes have opener systems installed at different times, leading to inconsistent remote ranges. We assess and recommend matching upgrades.",
      },
      {
        problem: "Heavier insulated door track wear",
        solution:
          "Larger insulated doors put more strain on tracks and rollers over time, often requiring earlier replacement than standard doors.",
      },
    ],
    nearbyAreas: ["Sherman Oaks", "Van Nuys", "Studio City", "West Los Angeles"],
    serviceOrder: [
      "garage-door-spring-replacement",
      "track-and-roller-replacement",
      "garage-door-opener",
      "garage-door-replacement",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Encino?",
        answer:
          "Yes, we serve homeowners and properties in Encino and nearby areas. Call to confirm availability.",
      },
      {
        question: "Do wider garage doors need different springs?",
        answer:
          "Yes, properly rated springs for the door's width and weight are essential. Incorrect tension is a common cause of premature failure on wider doors.",
      },
      {
        question: "Can you sync openers across a multi-car garage?",
        answer: "Yes, we assess existing systems and recommend matching upgrades where needed.",
      },
      {
        question: "Do larger insulated doors wear out tracks faster?",
        answer: "Yes, the added weight typically accelerates track and roller wear compared to standard doors.",
      },
      {
        question: "How do I request service in Encino?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-van-nuys",
    name: "Van Nuys",
    intro:
      "Van Nuys' dense residential and small-multifamily housing mix means garage doors here range from single-family sectional doors to shared-access units in smaller apartment buildings. We serve homeowners and properties in Van Nuys and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in Van Nuys",
    commonProblems: [
      {
        problem: "Shared-access door wear in small multifamily buildings",
        solution:
          "Doors used by multiple households cycle more often, accelerating roller and spring wear. We recommend more frequent inspection for shared-access installations.",
      },
      {
        problem: "Older opener systems needing safety sensor upgrades",
        solution:
          "Some older opener installations in this area predate modern auto-reverse safety standards. We assess and recommend upgrades where appropriate.",
      },
      {
        problem: "Standard sectional door hardware fatigue",
        solution:
          "Many Van Nuys homes have standard sectional doors reaching the age where hardware fatigue becomes noticeable, especially around hinges and rollers.",
      },
    ],
    nearbyAreas: ["Sherman Oaks", "Encino", "North Hollywood", "Burbank"],
    serviceOrder: [
      "garage-door-repair",
      "garage-door-opener",
      "track-and-roller-replacement",
      "preventive-maintenance",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Van Nuys?",
        answer:
          "Yes, we serve homeowners and properties in Van Nuys and nearby areas. Call to confirm availability.",
      },
      {
        question: "Do shared-access garage doors need more frequent service?",
        answer:
          "Yes, doors used by multiple households cycle more often, which can accelerate wear on rollers and springs.",
      },
      {
        question: "Can you upgrade older opener safety features?",
        answer:
          "Yes, we assess older systems and recommend safety sensor upgrades where appropriate.",
      },
      {
        question: "Do you repair garage door springs in Van Nuys?",
        answer: "Yes, spring repair and replacement is part of our coverage in this area.",
      },
      {
        question: "How do I request service in Van Nuys?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-north-hollywood",
    name: "North Hollywood",
    intro:
      "North Hollywood's revitalized arts district and surrounding residential blocks include a mix of renovated older homes and newer infill construction, each with different garage door needs. We serve homeowners and properties in North Hollywood and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in North Hollywood",
    commonProblems: [
      {
        problem: "Renovation-related door and opener mismatches",
        solution:
          "Home renovations sometimes leave a newer door paired with an older, incompatible opener. We check compatibility and recommend matched upgrades.",
      },
      {
        problem: "Infill construction tight garage clearances",
        solution:
          "Newer infill homes can have tighter garage dimensions, affecting standard opener and track installation. We assess clearance before recommending equipment.",
      },
      {
        problem: "Older home spring and cable wear",
        solution:
          "Original hardware on older renovated homes often needs replacement even when the door itself has been updated cosmetically.",
      },
    ],
    nearbyAreas: ["Burbank", "Glendale", "Van Nuys", "Studio City"],
    serviceOrder: [
      "garage-door-opener",
      "garage-door-spring-replacement",
      "garage-door-repair",
      "garage-door-replacement",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in North Hollywood?",
        answer:
          "Yes, we serve homeowners and properties in North Hollywood and nearby areas. Call to confirm availability.",
      },
      {
        question: "Can you fix a mismatched door and opener after renovation?",
        answer:
          "Yes, we check compatibility and recommend matched upgrades when a renovation has left mismatched equipment.",
      },
      {
        question: "Do newer infill homes need different equipment?",
        answer: "Sometimes. Tighter garage dimensions can affect standard installations, so we assess clearance first.",
      },
      {
        question: "Do you replace old hardware on renovated homes?",
        answer: "Yes, original springs and cables often need replacement even after cosmetic door updates.",
      },
      {
        question: "How do I request service in North Hollywood?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-los-feliz",
    name: "Los Feliz",
    intro:
      "Los Feliz's hillside Spanish and Craftsman-style homes often feature character garage doors that need careful, style-matched repair work. We serve homeowners and properties in Los Feliz and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in Los Feliz",
    commonProblems: [
      {
        problem: "Style-matched panel repair needs",
        solution:
          "Craftsman and Spanish-style homes often have custom or discontinued door styles. We assess whether a matching panel repair is possible or recommend a stylistically similar replacement.",
      },
      {
        problem: "Hillside foundation settling affecting alignment",
        solution:
          "Like many hillside Los Angeles neighborhoods, foundation settling over decades can throw off door track alignment.",
      },
      {
        problem: "Narrow, older driveway access constraints",
        solution:
          "Some older Los Feliz properties have narrower garage access that limits certain replacement door options. We discuss what fits during an in-person assessment.",
      },
    ],
    nearbyAreas: ["Hollywood", "Silver Lake", "Eagle Rock", "Glendale"],
    serviceOrder: [
      "garage-door-repair",
      "garage-door-replacement",
      "garage-door-off-track-repair",
      "preventive-maintenance",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Los Feliz?",
        answer:
          "Yes, we serve homeowners and properties in Los Feliz and nearby areas. Call to confirm availability.",
      },
      {
        question: "Can you match repairs to a Craftsman or Spanish-style door?",
        answer:
          "We assess each door individually and recommend style-matched panel repair when possible, or stylistically similar replacement options.",
      },
      {
        question: "Does hillside settling affect garage doors here?",
        answer: "Yes, foundation settling over time is a common cause of track misalignment in hillside homes.",
      },
      {
        question: "Do narrow driveways limit replacement options?",
        answer: "Sometimes. We assess access during an in-person visit to confirm what fits.",
      },
      {
        question: "How do I request service in Los Feliz?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-silver-lake",
    name: "Silver Lake",
    intro:
      "Silver Lake's eclectic mix of mid-century modern homes and renovated bungalows means garage door styles vary as much as the architecture. We serve homeowners and properties in Silver Lake and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in Silver Lake",
    commonProblems: [
      {
        problem: "Mid-century modern door panel sourcing",
        solution:
          "Original mid-century panel styles can be difficult to match for repair. We assess available options or recommend a comparable modern replacement.",
      },
      {
        problem: "Renovated bungalow opener upgrades",
        solution:
          "Many renovated homes in this area benefit from upgraded openers with modern safety sensors and smart-home compatibility.",
      },
      {
        problem: "Hillside drainage near garage entries",
        solution:
          "Similar to other hillside-adjacent neighborhoods, water drainage near garage entries can contribute to hardware corrosion over time.",
      },
    ],
    nearbyAreas: ["Los Feliz", "Hollywood", "Eagle Rock", "West Hollywood"],
    serviceOrder: [
      "garage-door-replacement",
      "garage-door-opener",
      "garage-door-repair",
      "preventive-maintenance",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Silver Lake?",
        answer:
          "Yes, we serve homeowners and properties in Silver Lake and nearby areas. Call to confirm availability.",
      },
      {
        question: "Can you match a mid-century modern door style?",
        answer:
          "We assess available matching options or recommend a comparable modern replacement if original panels aren't available.",
      },
      {
        question: "Do you recommend opener upgrades for renovated homes?",
        answer: "Often, yes. Many renovations benefit from modern safety sensors and smart-home compatibility.",
      },
      {
        question: "Does drainage near the garage affect hardware?",
        answer: "It can. We check for corrosion-related wear in areas with consistent water exposure.",
      },
      {
        question: "How do I request service in Silver Lake?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-eagle-rock",
    name: "Eagle Rock",
    intro:
      "Eagle Rock's mix of early 20th-century homes and hillside lots means garage doors here often pair older structures with varying levels of hardware updates. We serve homeowners and properties in Eagle Rock and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in Eagle Rock",
    commonProblems: [
      {
        problem: "Early-1900s structure door fit issues",
        solution:
          "Older garage structures can have settled or shifted openings that no longer perfectly match standard door sizing. We assess fit during inspection.",
      },
      {
        problem: "Partial hardware updates creating mismatches",
        solution:
          "Homes that have had partial hardware updates over the years sometimes end up with mismatched components. We evaluate the full system for compatibility.",
      },
      {
        problem: "Hillside lot track alignment",
        solution:
          "Similar to other Eastside hillside areas, sloped lots can affect long-term track alignment.",
      },
    ],
    nearbyAreas: ["Glendale", "Los Feliz", "Pasadena", "Silver Lake"],
    serviceOrder: [
      "garage-door-repair",
      "garage-door-off-track-repair",
      "garage-door-replacement",
      "track-and-roller-replacement",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Eagle Rock?",
        answer:
          "Yes, we serve homeowners and properties in Eagle Rock and nearby areas. Call to confirm availability.",
      },
      {
        question: "Can older garage openings cause door fit problems?",
        answer:
          "Yes, settled or shifted older structures sometimes no longer match standard door sizing. We assess fit during inspection.",
      },
      {
        question: "What if my garage has mismatched hardware from past updates?",
        answer: "We evaluate the full system and recommend a path to consistent, properly matched hardware.",
      },
      {
        question: "Do you handle off-track repairs in Eagle Rock?",
        answer: "Yes, including issues related to hillside lot settling affecting alignment.",
      },
      {
        question: "How do I request service in Eagle Rock?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-west-los-angeles",
    name: "West Los Angeles",
    intro:
      "West Los Angeles spans a wide mix of apartment-adjacent housing and single-family homes, with garage door needs ranging from shared-access systems to standard residential repair. We serve homeowners and properties in West Los Angeles and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in West Los Angeles",
    commonProblems: [
      {
        problem: "Shared-access garage wear in dense housing",
        solution:
          "Higher-density blocks mean some garage doors see more frequent use across multiple residents, accelerating wear on rollers and openers.",
      },
      {
        problem: "Standard single-family door hardware aging",
        solution:
          "Many single-family homes in this area have doors and hardware reaching typical end-of-life age, making preventive maintenance especially valuable.",
      },
      {
        problem: "Opener replacement for aging properties",
        solution:
          "Older opener motors common in this area often benefit from full replacement rather than incremental repair once major components start failing.",
      },
    ],
    nearbyAreas: ["Santa Monica", "Brentwood", "Culver City", "Beverly Hills"],
    serviceOrder: [
      "garage-door-repair",
      "preventive-maintenance",
      "garage-door-opener",
      "track-and-roller-replacement",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in West Los Angeles?",
        answer:
          "Yes, we serve homeowners and properties in West Los Angeles and nearby areas. Call to confirm availability.",
      },
      {
        question: "Do shared-access garages need different service schedules?",
        answer:
          "They can benefit from more frequent inspection, since higher use accelerates wear on rollers and openers.",
      },
      {
        question: "Is preventive maintenance worth it for older single-family homes?",
        answer: "Yes, especially when hardware is approaching typical end-of-life age.",
      },
      {
        question: "Do you replace older opener motors?",
        answer: "Yes, full replacement is often more practical once major components begin failing.",
      },
      {
        question: "How do I request service in West Los Angeles?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-brentwood",
    name: "Brentwood",
    intro:
      "Brentwood's larger estate-style properties often feature wide, heavy-duty garage doors with higher-end finishes and multi-bay configurations. We serve homeowners and properties in Brentwood and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in Brentwood",
    commonProblems: [
      {
        problem: "Multi-bay door coordination",
        solution:
          "Estate properties with multiple garage bays sometimes have doors installed at different times, leading to inconsistent performance across bays. We assess the full system together.",
      },
      {
        problem: "Heavy-duty door spring sizing",
        solution:
          "Larger, heavier doors need correctly rated springs. We verify proper sizing during any spring service.",
      },
      {
        problem: "High-end finish panel repair",
        solution:
          "Custom finishes require careful handling to avoid cosmetic damage during repair. We assess finish-safe repair options first.",
      },
    ],
    nearbyAreas: ["Santa Monica", "West Los Angeles", "Beverly Hills", "Culver City"],
    serviceOrder: [
      "garage-door-spring-replacement",
      "garage-door-replacement",
      "garage-door-opener",
      "preventive-maintenance",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Brentwood?",
        answer:
          "Yes, we serve homeowners and properties in Brentwood and nearby areas. Call to confirm availability.",
      },
      {
        question: "Can you coordinate repairs across a multi-bay garage?",
        answer: "Yes, we assess the full system together to ensure consistent performance across all bays.",
      },
      {
        question: "Do larger doors need different springs?",
        answer: "Yes, correctly rated springs for the door's size and weight are essential, and we verify this during service.",
      },
      {
        question: "Can you repair custom finish doors without cosmetic damage?",
        answer: "We assess finish-safe repair options first before considering more invasive work.",
      },
      {
        question: "How do I request service in Brentwood?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-torrance",
    name: "Torrance",
    intro:
      "Torrance's South Bay location and consistent suburban tract housing mean garage door issues here are often straightforward but benefit from quick, reliable service. We serve homeowners and properties in Torrance and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in Torrance",
    commonProblems: [
      {
        problem: "Standard tract door spring wear",
        solution:
          "Consistent suburban tract construction means many homes share similar door ages, often reaching typical spring replacement age around the same time.",
      },
      {
        problem: "South Bay marine layer moisture",
        solution:
          "Coastal-adjacent moisture from the marine layer can contribute to gradual hardware corrosion, similar to other South Bay communities.",
      },
      {
        problem: "Opener remote range in close-set neighborhoods",
        solution:
          "Closely spaced homes can occasionally experience remote signal crossover. Reprogramming with a unique rolling code resolves this.",
      },
    ],
    nearbyAreas: ["Long Beach", "Culver City", "West Los Angeles", "Redondo Beach"],
    serviceOrder: [
      "garage-door-spring-replacement",
      "garage-door-repair",
      "preventive-maintenance",
      "garage-door-opener",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Torrance?",
        answer:
          "Yes, we serve homeowners and properties in Torrance and nearby areas. Call to confirm availability.",
      },
      {
        question: "Does the marine layer affect garage door hardware?",
        answer:
          "Coastal-adjacent moisture can contribute to gradual corrosion over time, similar to other South Bay areas.",
      },
      {
        question: "Can you fix remote signal crossover with neighboring homes?",
        answer: "Yes, reprogramming with a unique rolling code typically resolves this.",
      },
      {
        question: "Do you repair garage door springs in Torrance?",
        answer: "Yes, spring repair and replacement is one of our most common service calls in this area.",
      },
      {
        question: "How do I request service in Torrance?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
  {
    slug: "garage-door-repair-long-beach",
    name: "Long Beach",
    intro:
      "Long Beach's coastal location and historic neighborhoods mean garage doors here face both salt-air exposure and a wide range of home ages, from early 1900s craftsman homes to newer waterfront development. We serve homeowners and properties in Long Beach and nearby areas, with availability that may vary.",
    commonProblemsHeading: "Common Garage Door Problems in Long Beach",
    commonProblems: [
      {
        problem: "Coastal salt-air corrosion",
        solution:
          "Proximity to the coast accelerates rust on hardware and tracks. We recommend more frequent inspection and rust-resistant hardware where appropriate.",
      },
      {
        problem: "Historic craftsman door restoration needs",
        solution:
          "Long Beach's older neighborhoods include original craftsman-era doors that may need restoration rather than straightforward repair.",
      },
      {
        problem: "Newer waterfront development opener compatibility",
        solution:
          "Newer builds sometimes use openers with different compatibility requirements for smart-home or remote upgrades. We check compatibility before recommending changes.",
      },
    ],
    nearbyAreas: ["Torrance", "Redondo Beach", "Manhattan Beach", "West Los Angeles"],
    serviceOrder: [
      "preventive-maintenance",
      "garage-door-repair",
      "garage-door-replacement",
      "track-and-roller-replacement",
    ],
    faqs: [
      {
        question: "Do you offer garage door repair in Long Beach?",
        answer:
          "Yes, we serve homeowners and properties in Long Beach and nearby areas. Call to confirm availability.",
      },
      {
        question: "Does coastal exposure affect garage doors in Long Beach?",
        answer:
          "Yes, salt air accelerates rust on hardware and tracks. We recommend more frequent inspection for coastal properties.",
      },
      {
        question: "Can you restore original craftsman-era garage doors?",
        answer: "We assess restoration feasibility on a case-by-case basis depending on the door's condition.",
      },
      {
        question: "Do you service openers in newer waterfront homes?",
        answer: "Yes, we check compatibility before recommending any smart-home or remote upgrades.",
      },
      {
        question: "How do I request service in Long Beach?",
        answer: "Call us directly or use our contact form with your address and issue details.",
      },
    ],
  },
];

export const homepageFaqs: FaqItem[] = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve Los Angeles and a number of surrounding communities. Call us with your address to confirm coverage and availability.",
  },
  {
    question: "How fast can someone come out for a repair?",
    answer:
      "Availability depends on your location and current schedule. Call us for the most accurate estimate, especially for urgent issues.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Call our team to discuss your repair and get pricing information before scheduling a visit.",
  },
  {
    question: "What garage door brands do you work with?",
    answer:
      "Our technicians work with a wide range of residential garage door and opener brands. Let us know your equipment when you call.",
  },
];
