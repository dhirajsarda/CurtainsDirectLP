# Landing Page Development Rules & Best Practices

These guidelines dictate the standard operating procedure for developing all future landing pages to ensure high conversion rates, accurate tracking, and consistent architecture.

## 1. Tracking & Analytics
- **URL Parameter Tracking:** Always capture `gclid`, `msclkid`, `fbclid`, `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` from the URL on page load.
- **Hidden Form Fields:** Inject all captured tracking parameters into hidden fields within every lead generation form. Additionally, include hidden fields to capture the **CTA text**, **form name**, and **content section** (where the CTA was clicked).
- **Google Tag Manager (GTM):** Install GTM using a standard environment variable structure (e.g., `VITE_GTM_ID` or `NEXT_PUBLIC_GTM_ID`) to keep the code environment-agnostic.
- **Data Layer Events:** Ensure the following custom events are pushed to the GTM data layer:
  - `form_start`: Fired when a user interacts with the first field of a form.
  - `form_submit`: Fired upon successful form validation and submission.
  - `call_click`: Fired when a user clicks any phone number link.
  - `whatsapp_click`: Fired when a user clicks a WhatsApp widget or link.
  - `cta_click`: Fired when a user clicks a CTA button (must include the exact CTA text in the event payload).

## 2. Form & Conversion Logic
- **Modal/Popup for CTAs:** All primary Lead Gen CTAs should open a form within a modal/popup rather than redirecting to a new page.
- **Dynamic Headline Matching:** The H2 or main headline inside the form modal *must* dynamically match the text or context of the CTA button that triggered it (use `data-attributes` on the button).
- **Data Submission:** All form submissions must be securely saved to a Google Sheet. Default to using **Google Apps Script** for this integration unless an alternative tool is explicitly requested. The submitted payload must include all tracking parameters, CTA text, form name, and content section alongside the user's data.
- **Email Notifications:** A successful form submission must simultaneously trigger an email notification containing the lead's details to the relevant sales/admin team.
- **Urgency Triggers:** Always incorporate an urgency element such as a countdown timer or "limited spots available" messaging near the primary conversion points.
- **Validation & Success States:** Implement strict frontend form validation for all applicable fields (e.g., strict regex checks for valid email formats and proper phone numbers). Provide clear visual feedback (a "Thank You" message or redirect) upon successful form submission.

## 3. UI/UX & Mobile-First Design
- **Mobile-First Layout:** Prioritize mobile responsiveness. Design the mobile view first and scale up for desktop.
- **Sticky CTA:** Implement a vertical, thumb-friendly Sticky CTA at the bottom of the screen exclusively for mobile users.
- **Call Widget:** Place a persistent call widget (e.g., a floating action button) to encourage instant inbound calls.
- **Consistent Framework:** Default to React + Tailwind CSS unless another framework is explicitly specified.

## 4. Asset Management
- **Centralized Assets:** Save all images, icons, and media in a single `/public/assets` folder.
- **Placement-Based Naming:** Name images based on their structural placement rather than their literal content (e.g., `hero-bg-mobile.jpg`, `testimonial-1.png`, `services-card-2.jpg`). This allows the client/developer to seamlessly swap out image files later without needing to change the source code.
- **Optimization:** Compress and optimize all images (use WebP where possible) and keep the DOM light for fast loading.

## 5. SEO & Accessibility (Bonus Best Practices)
- **Semantic HTML:** Use proper heading hierarchy (strictly one `<h1>` per page, followed sequentially by `<h2>`, `<h3>`, etc.).
- **Meta Data:** Include descriptive title tags and meta descriptions for indexing.
- **Accessibility:** Ensure all images have descriptive `alt` tags and all form fields have proper `aria-labels` or visually hidden associated `<label>` elements for screen readers.
- **Performance & Core Web Vitals:** Ensure low page load times and strictly follow Google Core Web Vitals guidelines. Keep third-party tracking scripts deferred or loaded asynchronously where possible to prevent render-blocking and ensure a high Google PageSpeed score.
