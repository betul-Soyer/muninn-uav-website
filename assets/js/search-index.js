/* Search index for the Muninn UAV site.
   Each entry: page (display name), url (page + anchor), title (section), text (searchable words).
   When you add or rename a section, add/update its entry here. */
window.SEARCH_INDEX = [
  /* ---- Home ---- */
  { page: "Home", url: "index.html#mission", title: "Who we are — our approach",
    text: "Muninn UAV Yazgit Community student team Türkiye Turkey mission autonomous tail-sitter tailsitter GöğeBakan gogebakan engineering simplicity reliability SUAS 2026" },
  { page: "Home", url: "index.html#competition", title: "The SUAS 2026 mission, task by task",
    text: "SUAS competition RoboNation tasks waypoint cruise 3.2 km search detect person tent SLAM mapping orthomosaic target alignment visual servoing September 14-17 handbook autonomous" },
  { page: "Home", url: "index.html#latest", title: "Latest from the build log",
    text: "news updates blog recent entries campaign public full mission simulation 45 minutes" },
  { page: "Home", url: "index.html#sponsors-strip", title: "Sponsors strip",
    text: "sponsors logos partners backing support become a sponsor" },

  /* ---- Team ---- */
  { page: "Team", url: "team.html#about", title: "The Yazgit Community's aerospace team",
    text: "about story Yazgit Community raven Munin memory origins who we are history" },
  { page: "Team", url: "team.html#members", title: "Members — SUAS 2026 roster",
    text: "members roster people captain subteams organisation structure Mustafa Akgün Mert Hüseyin Çağlayan Enes Kara Beyza Akbaş Yusuf Karagülle Betül Soyer Sena Altınordu Battal Berkay Aktaş avionics software AI mechanical" },
  { page: "Team", url: "team.html#advisor", title: "Faculty advisor",
    text: "academic advisor faculty mentor guidance Prof Dr Murat Ceylan Konya Technical University founder Yazgit Community" },
  { page: "Team", url: "team.html#contact", title: "Contact",
    text: "contact email muninnuav@gmail.com Konya Technical University Konya Türkiye Instagram muninnteam LinkedIn reach us address" },
  { page: "Team", url: "team.html#join", title: "Join the team",
    text: "join recruit apply new members semester application students" },

  /* ---- Vehicle ---- */
  { page: "Vehicle", url: "vehicle.html#overview", title: "GöğeBakan — systems overview",
    text: "GöğeBakan gogebakan HSVTOL quadrotor tail-sitter tailsitter VTOL flying wing carbon fibre patent patented Tesla 1928 unified propulsion architecture four motors 129 min endurance 247 km range 30% efficient systems engineering modular" },
  { page: "Vehicle", url: "vehicle.html#specs", title: "Mission design points & architecture",
    text: "specifications specs numbers endurance 129 min range 247 km efficiency 30% four motors patented cruise 3.2 km search altitude 45 m mission window 45 minutes detection person tent PX4 companion ROS 2 QGroundControl QGC ground station datalinks table" },
  { page: "Vehicle", url: "vehicle.html#airframe", title: "Airframe & flight regimes",
    text: "airframe flying wing carbon fibre tail-sitter quadrotor elevons wingtip fins landing gear hover transition pitch-over Pugachev Cobra manoeuvre cruise flight principle structure configuration" },
  { page: "Vehicle", url: "vehicle.html#profile", title: "Dynamic flight profiling",
    text: "flight profile mission phases fixed-wing cruise multicopter mode lawnmower grid search return vertical landing energy efficiency dynamic profiling" },
  { page: "Vehicle", url: "vehicle.html#avionics", title: "Avionics & datalinks",
    text: "avionics block diagram PX4 flight controller GNSS compass radio telemetry 915 MHz 5 GHz IP link RC receiver companion computer wiring" },
  { page: "Vehicle", url: "vehicle.html#autonomy", title: "Autonomy: detection, mapping, alignment",
    text: "autonomy software ROS 2 YOLOv8s custom dataset COCO 45 m detection SLAM orthomosaic mapping visual servoing target alignment QGroundControl QGC ground control station computer vision AI" },
  { page: "Vehicle", url: "vehicle.html#safety", title: "Safety systems & failsafes",
    text: "safety failsafe geofence return to launch RTL link loss battery failsafe kill switch checklist crew roles spotter" },
  { page: "Vehicle", url: "vehicle.html#design-decisions", title: "Design decisions / trade studies",
    text: "design decisions trade study rationale tail-sitter vs quadplane multirotor unified propulsion custom dataset YOLOv8s PX4 ROS 2 separation digital twin QGroundControl QGC off-the-shelf why we chose" },

  /* ---- Build Log ---- */
  { page: "Build Log", url: "journey.html#roadmap", title: "The validation ladder to SUAS 2026",
    text: "roadmap campaign plan milestones validation ladder numerical analysis simulation hardware integration ground testing incremental flight testing September 14-17 2026 timeline" },
  { page: "Build Log", url: "journey.html#log", title: "Build log (blog)",
    text: "build log blog history diary historical record entries progress dated posts" },
  { page: "Build Log", url: "journey.html#log-website", title: "The campaign goes public (Jul 2026)",
    text: "website launch campaign public engineering story deliverable" },
  { page: "Build Log", url: "journey.html#log-mission-sim", title: "Full mission inside 45 minutes (Spring 2026)",
    text: "full mission simulation 45 minutes end-to-end digital twin rulebook terrain search trajectories clock system-level" },
  { page: "Build Log", url: "journey.html#log-dataset", title: "Custom dataset unlocks 45 m detection",
    text: "custom dataset YOLOv8s COCO pre-trained failed 45 m altitude person tent component testing perception" },
  { page: "Build Log", url: "journey.html#log-twin", title: "GöğeBakan's digital twin comes alive",
    text: "Gazebo digital twin gogebakan model Baylands world person tent models simulation sub-system" },
  { page: "Build Log", url: "journey.html#testing", title: "Test program — component to system",
    text: "testing test program stages component sub-system system bench power digital twin Gazebo visual servoing full mission clock hardware flight testing pass criteria" },
  { page: "Build Log", url: "journey.html#procedures", title: "Procedures & checklists",
    text: "procedures preflight checklist flight test card abort criteria battery handling SOP charging safety paperwork go no-go" },
  { page: "Build Log", url: "journey.html#videos", title: "Test footage",
    text: "videos footage flight test real airframe 11 July 2026 watch" },

  /* ---- Media ---- */
  { page: "Media", url: "media.html#photos", title: "Photo gallery",
    text: "photos pictures gallery images render airframe carbon fibre apron top-down quadrotor grass field exhibition flight principle Gazebo Baylands digital twin" },
  { page: "Media", url: "media.html#usage", title: "Using our media",
    text: "media usage press credit license reuse full resolution request" },

  /* ---- Sponsors ---- */
  { page: "Sponsors", url: "sponsors.html#current", title: "Our sponsors — SUAS 2026",
    text: "sponsors current logos TÜBİTAK Girişimci İşadamları Vakfı Konya GİV Kapsül Teknoloji Platformu founding partners support" },
  { page: "Sponsors", url: "sponsors.html#inkind", title: "In-kind support",
    text: "in-kind materials carbon composites CNC machining 3D printing electronics batteries flight field travel logistics expertise donation" },
  { page: "Sponsors", url: "sponsors.html#contact-cta", title: "Become a sponsor",
    text: "become a sponsor contact email sponsorship deck budget call" }
];
