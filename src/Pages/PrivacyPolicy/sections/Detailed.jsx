import React from 'react'
import { Link } from 'react-router-dom'

const Detailed = () => {
    return (
        <section className='bg-gray-50 overflow-hidden flex flex-col items-center justify-center pb-20'>
            <div className='max-w-7xl mx-auto px-6  relative z-10 mt-10'>
                <section id='P_1' className='space-y-4 mb-10'>
                    <h1 className='text-3xl font-bold text-primaryBlue'>1) How ShiftDeploy Protects Your Privacy</h1>
                    <p>
                        At ShiftDeploy, your privacy isn’t an afterthought,it’s built into every layer of how we design, develop, and deploy technology.
                        This Privacy Policy explains how we handle personal and business data shared with us through our website, communication channels, and client projects.
                    </p>
                    <p>
                        Our goal is to make technology simple and secure for the businesses we serve.
                        That means we collect only the data necessary to deliver our services, we never sell your information, and we ensure every process follows
                        modern security and compliance standards.
                    </p>
                    <p>
                        This policy applies to all visitors, clients, and partners interacting with ShiftDeploy’s digital platforms or using our development,
                        cloud, or consulting services.
                    </p>

                </section>

                <section id='P_2' className='space-y-4 mb-10'>
                    <h1 className='text-3xl font-bold text-primaryBlue'>2) What Information ShiftDeploy Collects</h1>
                    <p>
                        To provide our services effectively, ShiftDeploy collects information in two primary ways. The data you share with us directly, and data
                        collected automatically when you use our website or interact with our systems.
                    </p>

                    <h3 className="text-lg font-semibold mt-4 mb-2">1. Information You Provide Directly</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Contact details such as your name, email address, phone number, or company name.</li>
                        <li>Project or inquiry information when you contact us for proposals or support.</li>
                        <li>Account credentials if you access client portals or project dashboards we host.</li>
                        <li>Billing or payment information (processed securely through third-party payment systems).</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4 mb-2">2. Information Collected Automatically</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Device and browser details such as IP address, operating system, and session duration.</li>
                        <li>Usage analytics including pages visited, time spent, and referral sources.</li>
                        <li>Cookies and tracking data (see the “Cookies & Analytics” section below for details).</li>
                    </ul>

                    <p className="mt-3">
                        This information helps us ensure reliability, improve site performance, and better understand how clients engage with our digital services.
                    </p>


                </section>

                <section id='P_3' className='space-y-4 mb-10'>
                    <h1 className='text-3xl font-bold text-primaryBlue'>3) How ShiftDeploy Uses Your Information</h1>
                    <p>
                        We use collected data only to deliver, improve, and secure our services and never for unauthorized marketing or resale.
                        Every use of your data aligns with a legitimate business purpose or contractual requirement.
                    </p>

                    <h3 className="text-lg font-semibold mt-4 mb-2">We use your information to:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Respond to inquiries and provide quotes, demos, or project updates.</li>
                        <li>Deliver contracted services, such as software development, cloud management, or technical consulting.</li>
                        <li>Improve product reliability, usability, and performance through analytics.</li>
                        <li>Enhance platform security, detect misuse, and prevent fraudulent activity.</li>
                        <li>Comply with applicable laws, financial record-keeping, and client contracts.</li>
                    </ul>

                    <p className="mt-3">
                        We do not sell or rent your personal data to any third parties.
                        Limited sharing only occurs with trusted providers or partners assisting in essential business operations
                        (outlined in the “Third-Party Services” section).
                    </p>



                </section>

                <section id='P_4' className='space-y-4 mb-10'>
                    <h1 className='text-3xl font-bold text-primaryBlue'>4) Cookies, Analytics & Tracking Technologies</h1>
                    <p>
                        Like most professional websites, ShiftDeploy uses cookies and analytics tools to understand how our platform is used and to enhance user experience.
                    </p>

                    <h3 className="text-lg font-semibold mt-4 mb-2">1. What Are Cookies?</h3>
                    <p>
                        Cookies are small text files stored on your device to help remember preferences,
                        improve navigation, and analyze traffic patterns. Some are essential for site operation,
                        while others help us measure and optimize performance.
                    </p>

                    <h3 className="text-lg font-semibold mt-4 mb-2">2. Types of Cookies We Use</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Essential cookies:</strong> Required for basic website functions and security.</li>
                        <li><strong>Analytics cookies:</strong> Used with tools like Google Analytics to collect aggregated data on usage trends.</li>
                        <li><strong>Functional cookies:</strong> Remember your settings or preferences for better user experience.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4 mb-2">3. Managing Cookies</h3>
                    <p>
                        You can control or disable cookies through your browser settings at any time.
                        However, some site features may not function correctly without essential cookies.
                    </p>


                </section>

                <section id='P_5' className='space-y-4 mb-10'>
                    <h1 className='text-3xl font-bold text-primaryBlue'>5) Third-Party Services We Depend On</h1>
                    <p>
                        To provide fast, secure, and reliable services, ShiftDeploy partners with a limited number of third-party providers.
                        These vendors support essential operations such as hosting, email delivery, analytics, and customer communication.
                    </p>

                    <h3 className="text-lg font-semibold mt-4 mb-2">Our key third-party providers may include:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Cloud Hosting:</strong> AWS or similar platforms for server and data infrastructure.</li>
                        <li><strong>Email & Communication:</strong> Services like SendGrid or Outlook for transactional and client communications.</li>
                        <li><strong>Analytics:</strong> Google Analytics or equivalent tools to understand user interaction trends.</li>
                        <li><strong>Payment Processing:</strong> Secure payment gateways for invoicing and subscription management.</li>
                    </ul>

                    <p className="mt-3">
                        Each of these providers processes data strictly under our instructions and is bound by confidentiality,
                        security, and compliance obligations. We carefully review all third-party partners before engagement to
                        ensure alignment with our privacy and security standards.
                    </p>

                </section>

                <section id='P_6' className='space-y-4 mb-10'>
                    <h1 className='text-3xl font-bold text-primaryBlue'>6) How Long ShiftDeploy Keeps Your Data</h1>
                    <p>
                        ShiftDeploy retains personal and project-related data only for as long as it is needed to deliver our services,
                        comply with legal obligations, or resolve potential disputes. Once data is no longer required for these purposes,
                        it is securely deleted or anonymized.
                    </p>

                    <p>
                        The retention period may vary depending on the type of information and the context in which it was collected.
                        For example:
                    </p>

                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Client project records</strong> — retained for the duration of the contract and a limited post-project archive period for reference or support.</li>
                        <li><strong>Financial and invoicing data</strong> — maintained as required by tax and accounting regulations.</li>
                        <li><strong>Contact or inquiry data</strong> — kept only as long as necessary to respond to your communication.</li>
                    </ul>

                    <p className="mt-3">
                        When deletion is required, we use secure data destruction methods that ensure information cannot be reconstructed or accessed.
                    </p>


                </section>

                <section id='P_7' className='space-y-4 mb-10'>
                    <h1 className='text-3xl font-bold text-primaryBlue'>7) How ShiftDeploy Secures Your Data</h1>
                    <p>
                        Data security is central to ShiftDeploy’s operations. We apply multiple layers of protection to prevent unauthorized
                        access, misuse, alteration, or loss of your data. Our security framework follows industry best practices for cloud
                        and software infrastructure.
                    </p>

                    <h3 className="text-lg font-semibold mt-4 mb-2">Key safeguards include:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Encryption of sensitive data both in transit (TLS/SSL) and at rest.</li>
                        <li>Restricted access to systems and databases through identity and access management controls.</li>
                        <li>Regular patching, security reviews, and vulnerability monitoring.</li>
                        <li>Secure development practices and code reviews for every project we deliver.</li>
                        <li>Periodic backups and disaster recovery procedures to ensure data availability.</li>
                    </ul>

                    <p className="mt-3">
                        While no system can guarantee complete security, ShiftDeploy continuously evaluates and strengthens
                        its defenses to protect both our infrastructure and our clients’ trust.
                    </p>


                </section>

                <section id='P_8' className='space-y-4 mb-10'>
                    <h1 className='text-3xl font-bold text-primaryBlue'>8) Your Privacy Rights & How to Exercise Them</h1>

                    <p>
                        ShiftDeploy believes in transparency and control — you have rights over your data,
                        regardless of where you are located. Depending on your jurisdiction, you may have the following rights:
                    </p>

                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
                        <li><strong>Correction:</strong> Ask us to update or correct inaccurate data.</li>
                        <li><strong>Deletion:</strong> Request that we erase data where legally permissible.</li>
                        <li><strong>Restriction:</strong> Limit how your information is used under certain conditions.</li>
                        <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time.</li>
                    </ul>

                    <p className="mt-3">
                        To exercise these rights, contact us at <strong>privacy@shiftdeploy.com</strong>.
                        We may need to verify your identity before processing certain requests to protect your data.
                    </p>


                </section>

                <section id='P_9' className='space-y-4 mb-10'>
                    <h1 className='text-3xl font-bold text-primaryBlue'>9) How ShiftDeploy Handles International Data Transfers</h1>
                    <p>
                        As a technology company serving clients across regions, some data may be processed or stored outside your home country.
                        For example, we may use cloud servers hosted in AWS or other international data centers to ensure performance and reliability.
                    </p>

                    <p>
                        Whenever data is transferred across borders, ShiftDeploy ensures compliance with applicable privacy regulations
                        (such as GDPR or similar frameworks) through:
                    </p>

                    <ul className="list-disc pl-5 space-y-1">
                        <li>Standard contractual clauses or equivalent legal mechanisms.</li>
                        <li>Engagement with providers that maintain certified compliance standards (e.g., ISO 27001, SOC 2).</li>
                        <li>Technical and organizational safeguards ensuring secure data handling.</li>
                    </ul>

                    <p className="mt-3">
                        Our goal is to ensure that your information receives the same level of protection regardless of where it is processed.
                    </p>

                </section>

                <section id='P_10' className='space-y-4 mb-10'>
                    <h1 className='text-3xl font-bold text-primaryBlue'>10) Children’s Privacy at ShiftDeploy</h1>
                    <p>
                        ShiftDeploy’s services are designed for businesses and professionals — not for individuals under the age of 16.
                        We do not knowingly collect or store personal data from minors.
                    </p>

                    <p>
                        If we discover that a child has provided us with personal information without parental consent,
                        we will promptly delete such data from our systems.
                        Parents or guardians who believe their child may have submitted information can contact us directly
                        at <strong>privacy@shiftdeploy.com</strong> for assistance.
                    </p>


                </section>

                <section id='P_11' className='space-y-4 mb-10'>
                    <h1 className='text-3xl font-bold text-primaryBlue'>11) Updates to ShiftDeploy’s Privacy Policy</h1>
                    <p>
                        ShiftDeploy may update this Privacy Policy from time to time to reflect changes in our practices,
                        technologies, or legal obligations. The “Last Updated” date at the top of this page indicates
                        when the latest revision took effect.
                    </p>

                    <p>
                        When we make significant updates, we will take appropriate measures to notify you,
                        such as posting a notice on our website or contacting you directly (if applicable).
                        We encourage you to review this page periodically to stay informed about how we protect your information.
                    </p>

                    <p className="mt-3">
                        Continued use of our services after an update means you acknowledge and agree to the revised policy.
                    </p>


                </section>

                <section id='P_12' className='space-y-4 mb-10'>
                    <h1 className='text-3xl font-bold text-primaryBlue'>12) Updates to ShiftDeploy’s Privacy Policy</h1>
                    <p>
                        If you have any questions, concerns, or requests related to this Privacy Policy
                        or how ShiftDeploy handles personal information, please contact us through one of the methods below:
                    </p>

                    <ul className="list-none mt-3 space-y-2">
                        <li><strong>Email:</strong> privacy@shiftdeploy.com</li>

                    </ul>

                    <p className="mt-3">
                        We take every privacy inquiry seriously and aim to respond within a reasonable timeframe.
                        Thank you for trusting ShiftDeploy with your data — we remain committed to transparency,
                        security, and ethical data use.
                    </p>



                </section>
                
                <hr className="border-t border-gray-200 my-8" />

                <p className="text-sm text-gray-500 mt-2 text-center">
                    Last updated on <span className="font-medium text-gray-700">October 17, 2025</span>
                </p>

                <section className="bg-gray-50 mt-10 p-6 rounded-2xl text-center">
                    <h3 className="text-3xl font-semibold text-primaryBlue mb-3">
                        Have Questions About How We Handle Data?
                    </h3>
                    <p className="text-gray-600 mb-5 max-w-xl mx-auto">
                        ShiftDeploy is committed to clear communication and responsible data practices.
                        If you’d like to learn more about how we protect your information, we’d be glad to help.
                    </p>
                    <Link 
                        to={"/ContactUs"}
                        className="inline-block hover:bg-toOrange text-white font-semibold px-6 py-3 rounded-lg bg-primaryOrange transition-colors"
                    >
                        Contact Our Privacy Team
                    </Link >
                </section>


            </div>


        </section>
    )
}

export default Detailed
