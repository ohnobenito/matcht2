const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/reactjob", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const likesSeed = [
  {
    id: 517357,
    url:
      "https://remotive.io/remote-jobs/software-dev/senior-frontend-engineer-517357",
    title: "(Senior) Frontend Engineer",
    company_name: "Socialive",
    category: "Software Development",
    job_type: "full time",
    publication_date: "2021-03-15T01:39:25",
    candidate_required_location: "USA",
    salary: "",
    description:
      "Socialive is an enterprise video creation & live streaming software company based in El Segundo, California. Our powerful yet intuitive platform makes it refreshingly easy to capture, create, and distribute video. We empower teams across the organization, including marketing, internal comms, and learning & development – and we're helping drive the video commerce revolution. Socialive customers include startups to the Fortune 100 – such as J.P. Morgan, Walmart, Pfizer, Adobe, and Audible. We're on a mission to radically simplify how the world makes video. Join us. About the role: Socialive is seeking senior frontend engineers to help us accelerate the implementation of exciting, dynamic capabilities for our clients. As a frontend engineer, you'll be responsible for:Working closely with your teammates and cross-functional collaborators to build and deliver dynamic, engaging capabilities while maintaining a positive and collaborative remote work environmentMentoring and coaching junior engineers, and leading execution across the teamOwning the quality and reliability of the projects owned by your teamWorking with our team of engineering leaders and product managers to estimate and deliver critical features while reducing risk and maintaining quality, identifying dependencies, and supporting deliverables across the entire product spaceMaintaining a focus on best-in-class engineering principles and process, from code architecture and quality to agile processes and ceremonies  Technologies you'll work with and experience you'll ideally bring: Deep mastery of frontend Javascript UI design patterns and best practices, focusing on React/Redux with an asynchronous/event-driven architectureManaging WebRTC connections and streams in a responsive, dynamic layoutAdopting and driving a test-forward approach with unit, integration, and end-to-end testsWorking with Atlassian tools (Bitbucket/Git, Jira, Confluence)Hosting and supporting applications in AWSExcellent oral and written communication skills This position is 100% remote, based in the US.`"
  },
  {
    id: 515770,
    url:
      "https://remotive.io/remote-jobs/software-dev/engineering-manager-515770",
    title: "Engineering Manager",
    company_name: "MarketFinance",
    category: "Software Development",
    job_type: "full time",
    publication_date: "2021-03-15T01:39:23",
    candidate_required_location: "Europe",
    salary: "",
    description:
      "The Company At MarketFinance, we celebrate ambitious business leaders. They bring strength to our economy and are building the world we all want to live in. MarketFinance is one of the UK's leading Fintechs and we use smart technology, backed by help from great people, to deliver flexible business finance solutions, directly and quickly. Our online platform and proprietary risk models enable us to provide business loans and advance cash against outstanding invoices, in the form of working capital funding, so that businesses can get on with growing - instead of having to worry about cash flow. We believe in the endless possibilities that arise when entrepreneurs have more time to focus on what they love.Our values matter and as part of the team, they’ll be yours too.#MakeItHappen | #1Team1Dream | #AlwaysBeLearning  The Role This is a remote position, we support you being fully remote, with optional access to a great office in the heart of Shoreditch if you prefer the hustle and bustle of a London office!As an Engineering manager to one of our key squads, you will work hand in hand with a product manager to ensure your squad is working on the things that matter most to our customers. You will provide both technical and thought leadership, supporting and developing both your squad and our growing engineering team.We strongly believe that by putting smart people from different backgrounds together we’re able to help our customers in ways that others can’t. We value diversity and recognise it as a strength; to support this we organise ourselves into cross-functional teams, this means that we empower you to learn new skills, drive innovation and redefine your role to suit your passion and focus. For example, we have had engineers discover that their passion is in data, and we have supported them in becoming data engineers. We have a strong DevOps culture too and believe CI/CD and testing are the only ways to innovate at scale; deployments should take minutes, not hours!  Your Technical Environment You’ll be working on our core platform allowing small businesses to access funding seamlessly through fantastic UX and automation of complex processing such as risk analysis and payment processing.Our core platform is built in .NET, C# WebAPI and ReactJS. Our technology stack is always evolving with us, as such, we are now developing new services serverless first, and we have plans to upgrade and uplift our older services to support our platform scaling. RequirementsHard skillsExcellent system design skills, previously architected multiple systems and able to talk these through at interview7+ years of experience working with backend technologies, including C#Unit / Integration / Acceptance / Regression testing experience3+ years experience with AzureSoft skills3+ years of experience leading a team of 3+ peopleAn excellent communicator, fluent in both written and spoken English, with the ability to communicate with both technical and non-technical stakeholdersYou’re an advocate of Agile practices, with a track record of deliveringYou have a track record of supporting and developing people - With a focus on productivity, engagement and growth BenefitsAt MarketFinance, the opportunity for growth is as big as your ambition. Things move quickly in FinTech and that’s all part of the adventure. Our benefits include:Working with a remote-first team with optional access to an office in the heart of ShoreditchCompetitive salary and best-in-class share options schemeFlexible working hours25 days annual leave, plus your birthday off20% time (improve the business how you want to)Mentoring from industry leaders and the opportunity to make an impact at one of Europe’s foremost FintechsPrivate health coverage and half-price Virgin Active gym membershipEnhanced maternity leaveAmazon Kindle and unlimited e-booksTraining budget (inc. subscriptions to Learnerbly and Pluralsight)We will bring you to the office once every quarter to socialise with your team  Hiring process From start to finish our hiring process takes between one to two weeks and consists of the following stages:Online programming testPair programming exerciseArchitecture reviewAsk us anythingMeet the CTOValues alignmentIf you’re ready to help UK businesses build the future APPLY NOW!  How will we use the information about you? We will use your data to process your application, to allow us to assess your suitability for a role and improve our sites. We may share your data with third parties to achieve these purposes. We will not share your data for marketing purposes.We will keep your data safe in accordance with data protection legislation. ",
}];

db.Likes
  .remove({})
  .then(() => db.Likes.collection.insertMany(likesSeed))
  .then((data) => {
    console.log("Seeder file has loaded onto the DB!")
    console.log(data.result.n + " Records Inserted, Baebes!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });