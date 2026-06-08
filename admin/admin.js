/* Taxi Media — Admin Dashboard */
'use strict';

// ── Schema: defines every editable field ─────────────────────────────────────
// key: dot-path into the JSON (e.g. "nav.home")
// label: human-readable label shown in the dashboard
// type: "input" (single line) | "textarea" (multiline)
// full: if true, field spans the full row width
const SCHEMA = [
  {
    id: 'general',
    label: 'General',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>',
    sections: [
      {
        title: 'Navigation',
        fields: [
          { key: 'nav.home',        label: 'Nav: Home',        type: 'input' },
          { key: 'nav.about',       label: 'Nav: About',       type: 'input' },
          { key: 'nav.advertising', label: 'Nav: Advertising', type: 'input' },
          { key: 'nav.partners',    label: 'Nav: Partners',    type: 'input' },
          { key: 'nav.contact',     label: 'Nav: Contact',     type: 'input' },
          { key: 'nav.cta_btn',     label: 'Nav: CTA Button',  type: 'input' },
        ]
      },
      {
        title: 'Footer',
        fields: [
          { key: 'footer.menu_title',     label: 'Footer: Menu heading',     type: 'input' },
          { key: 'footer.contact_title',  label: 'Footer: Contact heading',  type: 'input' },
          { key: 'footer.follow_title',   label: 'Footer: Follow heading',   type: 'input' },
          { key: 'footer.menu_advertise', label: 'Footer menu: Advertising', type: 'input' },
          { key: 'footer.menu_about',     label: 'Footer menu: About',       type: 'input' },
          { key: 'footer.menu_partners',  label: 'Footer menu: Partners',    type: 'input' },
          { key: 'footer.menu_home',      label: 'Footer menu: Home',        type: 'input' },
          { key: 'footer.menu_screens',   label: 'Footer menu: Screens',     type: 'input' },
          { key: 'footer.menu_contact',   label: 'Footer menu: Contact',     type: 'input' },
          { key: 'footer.menu_cases',     label: 'Footer menu: Cases',       type: 'input' },
          { key: 'footer.company_name',    label: 'Footer: Company name',    type: 'input' },
          { key: 'footer.company_tagline', label: 'Footer: Tagline',         type: 'input', full: true },
          { key: 'footer.company_sub',     label: 'Footer: Sub-tagline',     type: 'input', full: true },
          { key: 'footer.phone',   label: 'Footer: Phone',   type: 'input' },
          { key: 'footer.email',   label: 'Footer: Email',   type: 'input' },
          { key: 'footer.address', label: 'Footer: Address', type: 'textarea', full: true },
        ]
      }
    ]
  },
  {
    id: 'home',
    label: 'Home',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    sections: [
      {
        title: 'Hero',
        fields: [
          { key: 'home.hero_eyebrow', label: 'Hero: Eyebrow tag',          type: 'input', full: true },
          { key: 'home.hero_line1',   label: 'Hero: Line 1',               type: 'input', full: true },
          { key: 'home.hero_line2',   label: 'Hero: Line 2 (highlighted)', type: 'input', full: true },
          { key: 'home.hero_sub',     label: 'Hero: Subtitle',             type: 'textarea', full: true },
          { key: 'home.hero_btn1',    label: 'Hero: Button 1',             type: 'input' },
          { key: 'home.hero_btn2',    label: 'Hero: Button 2',             type: 'input' },
        ]
      },
      {
        title: 'Stats bar',
        fields: [
          { key: 'home.stat1_num', label: 'Stat 1: Number', type: 'input' },
          { key: 'home.stat1_lab', label: 'Stat 1: Label',  type: 'input' },
          { key: 'home.stat2_num', label: 'Stat 2: Number', type: 'input' },
          { key: 'home.stat2_lab', label: 'Stat 2: Label',  type: 'input' },
          { key: 'home.stat3_num', label: 'Stat 3: Number', type: 'input' },
          { key: 'home.stat3_lab', label: 'Stat 3: Label',  type: 'input' },
          { key: 'home.stat4_num', label: 'Stat 4: Number', type: 'input' },
          { key: 'home.stat4_lab', label: 'Stat 4: Label',  type: 'input' },
        ]
      },
      {
        title: 'Brands strip',
        fields: [
          { key: 'home.brands_label', label: 'Brands: Label text', type: 'input', full: true },
        ]
      },
      {
        title: 'Why Taxi Advertising section',
        fields: [
          { key: 'home.reach_h2_line1', label: 'Heading line 1', type: 'input' },
          { key: 'home.reach_h2_line2', label: 'Heading line 2 (highlighted)', type: 'input' },
          { key: 'home.reach_text',     label: 'Subtitle text', type: 'textarea', full: true },
          { key: 'home.reach_btn',      label: 'Button text',   type: 'input' },
          { key: 'home.card1_title', label: 'Card 1: Title', type: 'input' },
          { key: 'home.card1_text',  label: 'Card 1: Text',  type: 'textarea' },
          { key: 'home.card2_title', label: 'Card 2: Title', type: 'input' },
          { key: 'home.card2_text',  label: 'Card 2: Text',  type: 'textarea' },
          { key: 'home.card3_title', label: 'Card 3: Title', type: 'input' },
          { key: 'home.card3_text',  label: 'Card 3: Text',  type: 'textarea' },
        ]
      },
      {
        title: 'Amsterdam / Network section',
        fields: [
          { key: 'home.network_kicker', label: 'Kicker',        type: 'input' },
          { key: 'home.network_h2',     label: 'Heading',       type: 'input' },
          { key: 'home.network_text1',  label: 'Paragraph 1',   type: 'textarea', full: true },
          { key: 'home.network_text2',  label: 'Paragraph 2',   type: 'textarea', full: true },
          { key: 'home.network_btn',    label: 'Button text',   type: 'input' },
        ]
      },
      {
        title: 'CTA section',
        fields: [
          { key: 'home.cta_h2',   label: 'Heading',   type: 'input', full: true },
          { key: 'home.cta_text', label: 'Subtext',   type: 'textarea', full: true },
          { key: 'home.cta_btn1', label: 'Button 1',  type: 'input' },
          { key: 'home.cta_btn2', label: 'Button 2',  type: 'input' },
        ]
      }
    ]
  },
  {
    id: 'about',
    label: 'About',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>',
    sections: [
      {
        title: 'Page hero',
        fields: [
          { key: 'about.page_crumb',        label: 'Breadcrumb text',      type: 'input' },
          { key: 'about.page_kicker',       label: 'Kicker',               type: 'input' },
          { key: 'about.hero_h1_line1',     label: 'H1: Line 1',           type: 'input', full: true },
          { key: 'about.hero_h1_line2',     label: 'H1: Line 2 prefix',    type: 'input', full: true },
          { key: 'about.hero_h1_highlight', label: 'H1: Highlighted word', type: 'input' },
          { key: 'about.hero_sub',          label: 'Subtitle',             type: 'textarea', full: true },
        ]
      },
      {
        title: 'Story — Het verhaal (left column)',
        fields: [
          { key: 'about.story_left_kicker', label: 'Kicker',      type: 'input' },
          { key: 'about.story_left_h2',     label: 'Subheading',  type: 'input', full: true },
          { key: 'about.story_left_p1',     label: 'Paragraph 1', type: 'textarea', full: true },
          { key: 'about.story_left_p2',     label: 'Paragraph 2', type: 'textarea', full: true },
          { key: 'about.story_left_p3',     label: 'Paragraph 3', type: 'textarea', full: true },
        ]
      },
      {
        title: 'Story — De missie (right column)',
        fields: [
          { key: 'about.story_right_kicker', label: 'Kicker',      type: 'input' },
          { key: 'about.story_right_h2',     label: 'Subheading',  type: 'input', full: true },
          { key: 'about.story_right_p1',     label: 'Paragraph 1', type: 'textarea', full: true },
          { key: 'about.story_right_p2',     label: 'Paragraph 2', type: 'textarea', full: true },
        ]
      },
      {
        title: 'Pull quote',
        fields: [
          { key: 'about.pull_quote', label: 'Quote text', type: 'textarea', full: true },
        ]
      },
      {
        title: 'Growth & timeline',
        fields: [
          { key: 'about.growth_kicker', label: 'Kicker',          type: 'input' },
          { key: 'about.growth_h2',     label: 'Heading',         type: 'input', full: true },
          { key: 'about.growth_intro',  label: 'Intro paragraph', type: 'textarea', full: true },
        ]
      },
      {
        title: 'Timeline item 1 — Begin',
        fields: [
          { key: 'about.tl1_label', label: 'Label',       type: 'input' },
          { key: 'about.tl1_title', label: 'Title',       type: 'input', full: true },
          { key: 'about.tl1_text',  label: 'Description', type: 'textarea', full: true },
        ]
      },
      {
        title: 'Timeline item 2 — Nu',
        fields: [
          { key: 'about.tl2_label', label: 'Label',       type: 'input' },
          { key: 'about.tl2_title', label: 'Title',       type: 'input', full: true },
          { key: 'about.tl2_text',  label: 'Description', type: 'textarea', full: true },
        ]
      },
      {
        title: 'Timeline item 3 — Binnenkort',
        fields: [
          { key: 'about.tl3_label', label: 'Label',       type: 'input' },
          { key: 'about.tl3_title', label: 'Title',       type: 'input', full: true },
          { key: 'about.tl3_text',  label: 'Description', type: 'textarea', full: true },
        ]
      },
      {
        title: 'Amsterdam banner',
        fields: [
          { key: 'about.ams_city', label: 'City name',   type: 'input' },
          { key: 'about.ams_text', label: 'Description', type: 'textarea', full: true },
        ]
      },
      {
        title: 'Value cards',
        fields: [
          { key: 'about.card1_title', label: 'Card 1: Title', type: 'input' },
          { key: 'about.card1_text',  label: 'Card 1: Text',  type: 'textarea' },
          { key: 'about.card2_title', label: 'Card 2: Title', type: 'input' },
          { key: 'about.card2_text',  label: 'Card 2: Text',  type: 'textarea' },
          { key: 'about.card3_title', label: 'Card 3: Title', type: 'input' },
          { key: 'about.card3_text',  label: 'Card 3: Text',  type: 'textarea' },
          { key: 'about.card4_title', label: 'Card 4: Title', type: 'input' },
          { key: 'about.card4_text',  label: 'Card 4: Text',  type: 'textarea' },
        ]
      },
      {
        title: 'CTA section',
        fields: [
          { key: 'about.cta_h2',   label: 'Heading',  type: 'input', full: true },
          { key: 'about.cta_text', label: 'Subtext',  type: 'textarea', full: true },
          { key: 'about.cta_btn1', label: 'Button 1', type: 'input' },
          { key: 'about.cta_btn2', label: 'Button 2', type: 'input' },
        ]
      }
    ]
  },
  {
    id: 'advertising',
    label: 'Advertising',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><polygon points="10 8 15 11 10 14" fill="currentColor" stroke="none"/></svg>',
    sections: [
      {
        title: 'Page hero',
        fields: [
          { key: 'advertising.page_crumb',       label: 'Breadcrumb text',      type: 'input' },
          { key: 'advertising.page_kicker',      label: 'Kicker',               type: 'input' },
          { key: 'advertising.hero_h1_line1',    label: 'H1: Line 1',           type: 'input', full: true },
          { key: 'advertising.hero_h1_highlight', label: 'H1: Highlighted word', type: 'input' },
          { key: 'advertising.hero_sub',         label: 'Subtitle',             type: 'textarea', full: true },
          { key: 'advertising.hero_btn1',        label: 'Button 1',             type: 'input' },
          { key: 'advertising.hero_btn2',        label: 'Button 2',             type: 'input' },
        ]
      },
      {
        title: 'Stats bar',
        fields: [
          { key: 'advertising.stat1_num', label: 'Stat 1: Number', type: 'input' },
          { key: 'advertising.stat1_lab', label: 'Stat 1: Label',  type: 'input' },
          { key: 'advertising.stat2_num', label: 'Stat 2: Number', type: 'input' },
          { key: 'advertising.stat2_lab', label: 'Stat 2: Label',  type: 'input' },
          { key: 'advertising.stat3_num', label: 'Stat 3: Number', type: 'input' },
          { key: 'advertising.stat3_lab', label: 'Stat 3: Label',  type: 'input' },
          { key: 'advertising.stat4_num', label: 'Stat 4: Number', type: 'input' },
          { key: 'advertising.stat4_lab', label: 'Stat 4: Label',  type: 'input' },
        ]
      },
      {
        title: 'Formats section',
        fields: [
          { key: 'advertising.formats_kicker', label: 'Kicker',  type: 'input' },
          { key: 'advertising.formats_h2',     label: 'Heading', type: 'input', full: true },
          { key: 'advertising.formats_text',   label: 'Subtext', type: 'textarea', full: true },
          { key: 'advertising.format1_title', label: 'Format 1: Title', type: 'input' },
          { key: 'advertising.format1_text',  label: 'Format 1: Text',  type: 'textarea' },
          { key: 'advertising.format2_title', label: 'Format 2: Title', type: 'input' },
          { key: 'advertising.format2_text',  label: 'Format 2: Text',  type: 'textarea' },
          { key: 'advertising.format3_title', label: 'Format 3: Title', type: 'input' },
          { key: 'advertising.format3_text',  label: 'Format 3: Text',  type: 'textarea' },
        ]
      },
      {
        title: 'Why section',
        fields: [
          { key: 'advertising.why_kicker', label: 'Kicker',     type: 'input' },
          { key: 'advertising.why_h2',     label: 'Heading',    type: 'input', full: true },
          { key: 'advertising.why_text',   label: 'Paragraph',  type: 'textarea', full: true },
          { key: 'advertising.why_tick1',  label: 'Bullet 1',   type: 'input', full: true },
          { key: 'advertising.why_tick2',  label: 'Bullet 2',   type: 'input', full: true },
          { key: 'advertising.why_tick3',  label: 'Bullet 3',   type: 'input', full: true },
          { key: 'advertising.why_tick4',  label: 'Bullet 4',   type: 'input', full: true },
          { key: 'advertising.why_btn',    label: 'Button',     type: 'input' },
        ]
      },
      {
        title: 'Process steps',
        fields: [
          { key: 'advertising.process_kicker', label: 'Kicker',  type: 'input' },
          { key: 'advertising.process_h2',     label: 'Heading', type: 'input', full: true },
          { key: 'advertising.process_text',   label: 'Subtext', type: 'textarea', full: true },
          { key: 'advertising.step1_title', label: 'Step 1: Title', type: 'input' },
          { key: 'advertising.step1_text',  label: 'Step 1: Text',  type: 'textarea' },
          { key: 'advertising.step2_title', label: 'Step 2: Title', type: 'input' },
          { key: 'advertising.step2_text',  label: 'Step 2: Text',  type: 'textarea' },
          { key: 'advertising.step3_title', label: 'Step 3: Title', type: 'input' },
          { key: 'advertising.step3_text',  label: 'Step 3: Text',  type: 'textarea' },
          { key: 'advertising.step4_title', label: 'Step 4: Title', type: 'input' },
          { key: 'advertising.step4_text',  label: 'Step 4: Text',  type: 'textarea' },
        ]
      },
      {
        title: 'FAQ section',
        fields: [
          { key: 'advertising.faq_kicker', label: 'Kicker',  type: 'input' },
          { key: 'advertising.faq_h2',     label: 'Heading', type: 'input' },
        ]
      },
      {
        title: 'CTA section',
        fields: [
          { key: 'advertising.cta_h2',   label: 'Heading',  type: 'input', full: true },
          { key: 'advertising.cta_text', label: 'Subtext',  type: 'textarea', full: true },
          { key: 'advertising.cta_btn1', label: 'Button 1', type: 'input' },
          { key: 'advertising.cta_btn2', label: 'Button 2', type: 'input' },
        ]
      }
    ]
  },
  {
    id: 'partners',
    label: 'Partners',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    sections: [
      {
        title: 'Page hero',
        fields: [
          { key: 'partners.page_crumb',       label: 'Breadcrumb text',      type: 'input' },
          { key: 'partners.page_kicker',      label: 'Kicker',               type: 'input' },
          { key: 'partners.hero_h1_line1',    label: 'H1: Line 1',           type: 'input', full: true },
          { key: 'partners.hero_h1_highlight', label: 'H1: Highlighted word', type: 'input' },
          { key: 'partners.hero_sub',         label: 'Subtitle',             type: 'textarea', full: true },
          { key: 'partners.hero_btn1',        label: 'Button 1',             type: 'input' },
          { key: 'partners.hero_btn2',        label: 'Button 2',             type: 'input' },
        ]
      },
      {
        title: 'Partnership types',
        fields: [
          { key: 'partners.types_kicker', label: 'Kicker',  type: 'input' },
          { key: 'partners.types_h2',     label: 'Heading', type: 'input', full: true },
          { key: 'partners.types_text',   label: 'Subtext', type: 'textarea', full: true },
          { key: 'partners.type1_title', label: 'Type 1: Title', type: 'input' },
          { key: 'partners.type1_text',  label: 'Type 1: Text',  type: 'textarea' },
          { key: 'partners.type2_title', label: 'Type 2: Title', type: 'input' },
          { key: 'partners.type2_text',  label: 'Type 2: Text',  type: 'textarea' },
          { key: 'partners.type3_title', label: 'Type 3: Title', type: 'input' },
          { key: 'partners.type3_text',  label: 'Type 3: Text',  type: 'textarea' },
        ]
      },
      {
        title: 'Brands section',
        fields: [
          { key: 'partners.brands_kicker', label: 'Kicker',  type: 'input' },
          { key: 'partners.brands_h2',     label: 'Heading', type: 'input', full: true },
          { key: 'partners.brands_text',   label: 'Subtext', type: 'textarea', full: true },
        ]
      },
      {
        title: 'CTA section',
        fields: [
          { key: 'partners.cta_h2',   label: 'Heading',  type: 'input', full: true },
          { key: 'partners.cta_text', label: 'Subtext',  type: 'textarea', full: true },
          { key: 'partners.cta_btn1', label: 'Button 1', type: 'input' },
          { key: 'partners.cta_btn2', label: 'Button 2', type: 'input' },
        ]
      }
    ]
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    sections: [
      {
        title: 'Page hero',
        fields: [
          { key: 'contact.page_crumb',       label: 'Breadcrumb text',      type: 'input' },
          { key: 'contact.page_kicker',      label: 'Kicker',               type: 'input' },
          { key: 'contact.hero_h1_line1',    label: 'H1: Line 1',           type: 'input' },
          { key: 'contact.hero_h1_highlight', label: 'H1: Highlighted word', type: 'input' },
          { key: 'contact.hero_sub',         label: 'Subtitle',             type: 'textarea', full: true },
        ]
      },
      {
        title: 'Contact form',
        fields: [
          { key: 'contact.form_kicker', label: 'Kicker',  type: 'input' },
          { key: 'contact.form_h2',     label: 'Heading', type: 'input', full: true },
          { key: 'contact.field_name',    label: 'Field: Name label',        type: 'input' },
          { key: 'contact.field_name_ph', label: 'Field: Name placeholder',  type: 'input' },
          { key: 'contact.field_company',    label: 'Field: Company label',       type: 'input' },
          { key: 'contact.field_company_ph', label: 'Field: Company placeholder', type: 'input' },
          { key: 'contact.field_email',    label: 'Field: Email label',        type: 'input' },
          { key: 'contact.field_email_ph', label: 'Field: Email placeholder',  type: 'input' },
          { key: 'contact.field_phone',    label: 'Field: Phone label',        type: 'input' },
          { key: 'contact.field_phone_ph', label: 'Field: Phone placeholder',  type: 'input' },
          { key: 'contact.field_topic',  label: 'Field: Topic label', type: 'input', full: true },
          { key: 'contact.topic_opt1', label: 'Topic option 1', type: 'input', full: true },
          { key: 'contact.topic_opt2', label: 'Topic option 2', type: 'input', full: true },
          { key: 'contact.topic_opt3', label: 'Topic option 3', type: 'input', full: true },
          { key: 'contact.topic_opt4', label: 'Topic option 4', type: 'input', full: true },
          { key: 'contact.field_message',    label: 'Field: Message label',       type: 'input' },
          { key: 'contact.field_message_ph', label: 'Field: Message placeholder', type: 'input' },
          { key: 'contact.submit_btn', label: 'Submit button', type: 'input' },
        ]
      },
      {
        title: 'Contact info panel',
        fields: [
          { key: 'contact.info_title',    label: 'Info panel: Title',        type: 'input', full: true },
          { key: 'contact.phone_label',   label: 'Phone label',  type: 'input' },
          { key: 'contact.phone_value',   label: 'Phone number', type: 'input' },
          { key: 'contact.email_label',   label: 'Email label',   type: 'input' },
          { key: 'contact.email_value',   label: 'Email address', type: 'input' },
          { key: 'contact.address_label', label: 'Address label', type: 'input' },
          { key: 'contact.address_value', label: 'Address',       type: 'textarea' },
          { key: 'contact.hours_label',   label: 'Hours label',  type: 'input' },
          { key: 'contact.hours_value',   label: 'Hours',        type: 'input' },
        ]
      }
    ]
  }
];

// ── Typography schema ─────────────────────────────────────────────────────────
const TYPO_SCHEMA = [
  {
    title: 'Navigation',
    elements: [
      { key: 'nav-link', label: 'Navigation links', size: '14.5', font: 'sans', color: '#e9e9e9' },
      { key: 'nav-btn',  label: 'Header CTA button', size: '14',   font: 'sans', color: '#0c0c0c' },
    ]
  },
  {
    title: 'Home Hero',
    elements: [
      { key: 'sec-h',       label: 'Main heading',    size: '40',   font: 'sans', color: '#ffffff' },
      { key: 'reach-text',  label: 'Hero subtitle',   size: '15',   font: 'sans', color: '#6f6f6f' },
      { key: 'stat-num',    label: 'Stat number',     size: '23',   font: 'sans', color: '#ffffff' },
      { key: 'stat-lab',    label: 'Stat label',      size: '12.5', font: 'sans', color: '#9a9a9a' },
    ]
  },
  {
    title: 'Page Hero (inner pages)',
    elements: [
      { key: 'page-hero-h1',     label: 'H1 heading',      size: '60',   font: 'sans', color: '#ffffff' },
      { key: 'page-hero-p',      label: 'Hero subtitle',   size: '17',   font: 'sans', color: '#cfcfcf' },
      { key: 'page-hero-crumbs', label: 'Breadcrumb text', size: '12.5', font: 'sans', color: '#7f7f7f' },
    ]
  },
  {
    title: 'Buttons',
    elements: [
      { key: 'btn-size',           label: 'Button font size (all)',              size: '14', font: 'sans', noColor: true },
      { key: 'btn-primary-bg',     label: 'Primary button — background',         colorOnly: true, color: '#EB5E28' },
      { key: 'btn-primary-text',   label: 'Primary button — text colour',        colorOnly: true, color: '#0c0c0c' },
      { key: 'btn-dark-bg',        label: 'Dark button — background',            colorOnly: true, color: '#0c0c0c' },
      { key: 'btn-dark-text',      label: 'Dark button — text colour',           colorOnly: true, color: '#ffffff' },
      { key: 'btn-outline-text',   label: 'Outline button (dark bg) — text',     colorOnly: true, color: '#ffffff' },
      { key: 'btn-outline-border', label: 'Outline button (dark bg) — border',   colorOnly: true, color: '#ffffff' },
      { key: 'btn-outline-dk-text',label: 'Outline button (light bg) — text',    colorOnly: true, color: '#0c0c0c' },
      { key: 'btn-outline-dk-brd', label: 'Outline button (light bg) — border',  colorOnly: true, color: '#0c0c0c' },
    ]
  },
  {
    title: 'Brand Accent Colours',
    elements: [
      { key: 'kicker',          label: 'Kicker / label tag',             colorOnly: true, color: '#EB5E28' },
      { key: 'sec-highlight',   label: 'Section heading highlight word', colorOnly: true, color: '#EB5E28' },
      { key: 'card-rule',       label: 'Card accent bar (bottom)',       colorOnly: true, color: '#EB5E28' },
      { key: 'brands-label',    label: 'Brands strip label',            colorOnly: true, color: '#EB5E28' },
      { key: 'cta-bg',          label: 'CTA section background',        colorOnly: true, color: '#EB5E28' },
      { key: 'btn-primary-bg',  label: 'Primary button background',     colorOnly: true, color: '#EB5E28' },
      { key: 'foot-brand',      label: 'Footer brand name',             colorOnly: true, color: '#EB5E28' },
      { key: 'foot-contact-icon',label: 'Footer contact icons',         colorOnly: true, color: '#EB5E28' },
      { key: 'foot-menu-hover', label: 'Footer menu link hover',        colorOnly: true, color: '#EB5E28' },
      { key: 'social-hover-bg', label: 'Social icons hover background', colorOnly: true, color: '#EB5E28' },
    ]
  },
  {
    title: 'Section Headings',
    elements: [
      { key: 'sec-head-h2', label: 'Section heading (h2)',  size: '36', font: 'sans', color: '#161616' },
      { key: 'sec-head-p',  label: 'Section subtitle text', size: '15', font: 'sans', color: '#6f6f6f' },
    ]
  },
  {
    title: 'Cards',
    elements: [
      { key: 'card-h3', label: 'Card heading',   size: '18',   font: 'sans', color: '#161616' },
      { key: 'card-p',  label: 'Card body text', size: '13.5', font: 'sans', color: '#6f6f6f' },
    ]
  },
  {
    title: 'Content Sections',
    elements: [
      { key: 'split-h2', label: 'Split / Network heading', size: '32',   font: 'sans', color: '#161616' },
      { key: 'split-p',  label: 'Split / Network body',    size: '15',   font: 'sans', color: '#6f6f6f' },
      { key: 'ticks-li', label: 'Bullet point text',       size: '14.5', font: 'sans', color: '#6f6f6f' },
      { key: 'step-h3',  label: 'Step heading',            size: '17',   font: 'sans', color: '#161616' },
      { key: 'step-p',   label: 'Step body text',          size: '13.5', font: 'sans', color: '#6f6f6f' },
    ]
  },
  {
    title: 'Footer',
    elements: [
      { key: 'foot-h4',      label: 'Footer column headings', size: '12',   font: 'sans', color: '#ffffff' },
      { key: 'foot-links',   label: 'Footer links',           size: '13.5', font: 'sans', color: '#9a9a9a' },
      { key: 'foot-contact', label: 'Footer contact info',    size: '13.5', font: 'sans', color: '#bdbdbd' },
    ]
  },
];

const FONT_OPTIONS = [
  { value: 'sans',   label: 'Sans-serif (default)' },
  { value: 'serif',  label: 'Serif' },
  { value: 'mono',   label: 'Monospace' },
  { value: 'caveat', label: 'Caveat (handwritten)' },
  { value: 'anton',  label: 'Anton (condensed bold)' },
  { value: 'caslon', label: 'Libre Caslon Display' },
];

// ── State ────────────────────────────────────────────────────────────────────
let allContent = { nl: {}, en: {} };
let heroBgs = {};
let slotImages = {};
let brandLogos = [];
let brandLogosSettings = { size: 36, color: 'grey', gap: 10 };
let typoSettings = {};
let screenZones = null;
let heroMedia = { videos: {}, banners: {}, defaults: { video: false, banner: false } };
let activePage = null;
let activeLang = 'nl';
let _zoneEditorCleanup = null;

const HERO_BG_PAGES = ['about', 'advertising', 'partners', 'contact'];

// ── DOM helpers ───────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

function showToast(msg, type = 'success') {
  const t = $('toast');
  t.textContent = msg;
  t.className = `toast ${type}`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── Deep get/set by dot path ──────────────────────────────────────────────────
function deepGet(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] != null ? o[k] : ''), obj);
}

function deepSet(obj, path, val) {
  const parts = path.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!cur[parts[i]] || typeof cur[parts[i]] !== 'object') cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = val;
}

// ── Helper: convert banner image to PNG data URL ──────────────────────────────
function heroBannerToDataUrl(file) {
  return new Promise(function(resolve, reject) {
    var MAX = 800;
    var reader = new FileReader();
    reader.onerror = reject;
    reader.onload = function() {
      var img = new Image();
      img.onerror = reject;
      img.onload = function() {
        var scale = Math.min(1, MAX / Math.max(img.width, img.height));
        var w = Math.round(img.width * scale);
        var h = Math.round(img.height * scale);
        var canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

// ── Hero screen media widget (videos + banners) ───────────────────────────────
function buildHeroMediaWidget() {
  const SLOTS = [1, 2, 3, 4, 5];
  const BANNER_SLOTS = [2, 3, 4, 5];

  const wrap = document.createElement('div');
  wrap.className = 'hero-media-widget';

  function renderSlot(slot) {
    const hasVideo  = !!heroMedia.videos[slot];
    const hasBanner = !!heroMedia.banners[slot];
    const hasBannerSlot = BANNER_SLOTS.includes(slot);

    const slotEl = document.createElement('div');
    slotEl.className = 'hero-media-slot';

    const videoColHtml = `
      <div class="hero-media-col" data-col="video">
        <div class="hero-media-type">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><polygon points="10 8 15 11 10 14" fill="currentColor" stroke="none"/></svg>
          Video (.mp4)
        </div>
        <div class="hero-media-status ${hasVideo ? 'is-set' : ''}">${hasVideo ? '&#10003; Video uploaded' : 'No video — slot skipped'}</div>
        <div class="hero-media-actions">
          <label class="hero-bg-btn primary">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <span class="js-video-lbl">${hasVideo ? 'Replace' : 'Upload MP4'}</span>
            <input type="file" accept="video/mp4,video/webm,video/quicktime" hidden>
          </label>
          ${hasVideo ? '<button type="button" class="hero-bg-btn danger js-video-rm">Remove</button>' : ''}
        </div>
      </div>`;

    const bannerColHtml = hasBannerSlot ? `
      <div class="hero-media-col" data-col="banner">
        <div class="hero-media-type">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
          Banner Image
        </div>
        ${hasBanner ? `<div class="hero-media-banner-thumb"><img src="/assets/${slot}.png?t=${Date.now()}" alt="Banner ${slot}"></div>` : ''}
        <div class="hero-media-status ${hasBanner ? 'is-set' : ''}">${hasBanner ? '&#10003; Banner uploaded' : 'No banner — side panel hidden'}</div>
        <div class="hero-media-actions">
          <label class="hero-bg-btn primary">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <span class="js-banner-lbl">${hasBanner ? 'Replace' : 'Upload Image'}</span>
            <input type="file" accept="image/png,image/jpeg,image/webp" hidden>
          </label>
          ${hasBanner ? '<button type="button" class="hero-bg-btn danger js-banner-rm">Remove</button>' : ''}
        </div>
      </div>` : `<div class="hero-media-col hero-media-col-empty">No banner for slot 1</div>`;

    slotEl.innerHTML = `
      <div class="hero-media-num">${slot}</div>
      <div class="hero-media-cols">${videoColHtml}${bannerColHtml}</div>`;

    // Video upload
    slotEl.querySelector('[data-col="video"] input').addEventListener('change', async function() {
      const file = this.files[0];
      if (!file) return;
      if (file.size > 200 * 1024 * 1024) { showToast('Max file size is 200 MB', 'error'); this.value = ''; return; }
      const lbl = slotEl.querySelector('.js-video-lbl');
      const prev = lbl.textContent;
      lbl.textContent = 'Uploading…';
      try {
        const dataUrl = await new Promise((res, rej) => { const r = new FileReader(); r.onerror = rej; r.onload = () => res(r.result); r.readAsDataURL(file); });
        const resp = await fetch('/api/hero-media', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slot, type: 'video', data: dataUrl }) });
        if (resp.ok) { heroMedia.videos[slot] = true; showToast(`Slot ${slot} video saved!`, 'success'); renderAll(); }
        else { const e = await resp.json().catch(() => ({})); showToast('Upload failed: ' + (e.error || resp.status), 'error'); lbl.textContent = prev; }
      } catch(e) { showToast('Upload failed: ' + e.message, 'error'); lbl.textContent = prev; }
      this.value = '';
    });

    // Video remove
    const vRm = slotEl.querySelector('.js-video-rm');
    if (vRm) vRm.addEventListener('click', async function() {
      try {
        const resp = await fetch('/api/hero-media', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slot, type: 'video' }) });
        if (resp.ok) { delete heroMedia.videos[slot]; showToast(`Slot ${slot} video removed`, 'success'); renderAll(); }
        else showToast('Remove failed', 'error');
      } catch(e) { showToast('Remove failed: ' + e.message, 'error'); }
    });

    // Banner upload
    const bannerInput = slotEl.querySelector('[data-col="banner"] input');
    if (bannerInput) bannerInput.addEventListener('change', async function() {
      const file = this.files[0];
      if (!file) return;
      const lbl = slotEl.querySelector('.js-banner-lbl');
      const prev = lbl.textContent;
      lbl.textContent = 'Uploading…';
      try {
        const dataUrl = await heroBannerToDataUrl(file);
        const resp = await fetch('/api/hero-media', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slot, type: 'banner', data: dataUrl }) });
        if (resp.ok) { heroMedia.banners[slot] = true; showToast(`Slot ${slot} banner saved!`, 'success'); renderAll(); }
        else { const e = await resp.json().catch(() => ({})); showToast('Upload failed: ' + (e.error || resp.status), 'error'); lbl.textContent = prev; }
      } catch(e) { showToast('Upload failed: ' + e.message, 'error'); lbl.textContent = prev; }
      this.value = '';
    });

    // Banner remove
    const bRm = slotEl.querySelector('.js-banner-rm');
    if (bRm) bRm.addEventListener('click', async function() {
      try {
        const resp = await fetch('/api/hero-media', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slot, type: 'banner' }) });
        if (resp.ok) { delete heroMedia.banners[slot]; showToast(`Slot ${slot} banner removed`, 'success'); renderAll(); }
        else showToast('Remove failed', 'error');
      } catch(e) { showToast('Remove failed: ' + e.message, 'error'); }
    });

    return slotEl;
  }

  function renderDefaultSlot() {
    const hasVideo  = !!heroMedia.defaults.video;
    const hasBanner = !!heroMedia.defaults.banner;

    const slotEl = document.createElement('div');
    slotEl.className = 'hero-media-slot hero-media-slot-default';

    const videoColHtml = `
      <div class="hero-media-col" data-col="video">
        <div class="hero-media-type">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><polygon points="10 8 15 11 10 14" fill="currentColor" stroke="none"/></svg>
          Default Video
        </div>
        <div class="hero-media-status ${hasVideo ? 'is-set' : ''}">${hasVideo ? '&#10003; Uploaded — plays as fallback loop' : 'Not set — built-in placeholder shown'}</div>
        <div class="hero-media-actions">
          <label class="hero-bg-btn primary">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <span class="js-video-lbl">${hasVideo ? 'Replace' : 'Upload MP4'}</span>
            <input type="file" accept="video/mp4,video/webm,video/quicktime" hidden>
          </label>
          ${hasVideo ? '<button type="button" class="hero-bg-btn danger js-video-rm">Remove</button>' : ''}
        </div>
      </div>`;

    const bannerColHtml = `
      <div class="hero-media-col" data-col="banner">
        <div class="hero-media-type">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
          Default Banner
        </div>
        ${hasBanner ? `<div class="hero-media-banner-thumb"><img src="/assets/default-banner.png?t=${Date.now()}" alt="Default banner"></div>` : ''}
        <div class="hero-media-status ${hasBanner ? 'is-set' : ''}">${hasBanner ? '&#10003; Uploaded — shown when slot has no banner' : 'Not set — built-in placeholder shown'}</div>
        <div class="hero-media-actions">
          <label class="hero-bg-btn primary">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <span class="js-banner-lbl">${hasBanner ? 'Replace' : 'Upload Image'}</span>
            <input type="file" accept="image/png,image/jpeg,image/webp" hidden>
          </label>
          ${hasBanner ? '<button type="button" class="hero-bg-btn danger js-banner-rm">Remove</button>' : ''}
        </div>
      </div>`;

    slotEl.innerHTML = `
      <div class="hero-media-num hero-media-num-default">D</div>
      <div class="hero-media-cols">${videoColHtml}${bannerColHtml}</div>`;

    // Default video upload
    slotEl.querySelector('[data-col="video"] input').addEventListener('change', async function() {
      const file = this.files[0];
      if (!file) return;
      if (file.size > 200 * 1024 * 1024) { showToast('Max file size is 200 MB', 'error'); this.value = ''; return; }
      const lbl = slotEl.querySelector('.js-video-lbl');
      const prev = lbl.textContent;
      lbl.textContent = 'Uploading…';
      try {
        const dataUrl = await new Promise((res, rej) => { const r = new FileReader(); r.onerror = rej; r.onload = () => res(r.result); r.readAsDataURL(file); });
        const resp = await fetch('/api/hero-media', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slot: 'default', type: 'video', data: dataUrl }) });
        if (resp.ok) { heroMedia.defaults.video = true; showToast('Default video saved!', 'success'); renderAll(); }
        else { const e = await resp.json().catch(() => ({})); showToast('Upload failed: ' + (e.error || resp.status), 'error'); lbl.textContent = prev; }
      } catch(e) { showToast('Upload failed: ' + e.message, 'error'); lbl.textContent = prev; }
      this.value = '';
    });

    // Default video remove
    const vRm = slotEl.querySelector('.js-video-rm');
    if (vRm) vRm.addEventListener('click', async function() {
      try {
        const resp = await fetch('/api/hero-media', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slot: 'default', type: 'video' }) });
        if (resp.ok) { heroMedia.defaults.video = false; showToast('Default video removed', 'success'); renderAll(); }
        else showToast('Remove failed', 'error');
      } catch(e) { showToast('Remove failed: ' + e.message, 'error'); }
    });

    // Default banner upload
    slotEl.querySelector('[data-col="banner"] input').addEventListener('change', async function() {
      const file = this.files[0];
      if (!file) return;
      const lbl = slotEl.querySelector('.js-banner-lbl');
      const prev = lbl.textContent;
      lbl.textContent = 'Uploading…';
      try {
        const dataUrl = await heroBannerToDataUrl(file);
        const resp = await fetch('/api/hero-media', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slot: 'default', type: 'banner', data: dataUrl }) });
        if (resp.ok) { heroMedia.defaults.banner = true; showToast('Default banner saved!', 'success'); renderAll(); }
        else { const e = await resp.json().catch(() => ({})); showToast('Upload failed: ' + (e.error || resp.status), 'error'); lbl.textContent = prev; }
      } catch(e) { showToast('Upload failed: ' + e.message, 'error'); lbl.textContent = prev; }
      this.value = '';
    });

    // Default banner remove
    const bRm = slotEl.querySelector('.js-banner-rm');
    if (bRm) bRm.addEventListener('click', async function() {
      try {
        const resp = await fetch('/api/hero-media', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slot: 'default', type: 'banner' }) });
        if (resp.ok) { heroMedia.defaults.banner = false; showToast('Default banner removed', 'success'); renderAll(); }
        else showToast('Remove failed', 'error');
      } catch(e) { showToast('Remove failed: ' + e.message, 'error'); }
    });

    return slotEl;
  }

  function renderAll() {
    wrap.innerHTML = `
      <div class="hero-media-header">
        Hero Screen Media
        <span class="hero-media-hint">5 video slots rotate in the headrest LCD · Slots 2–5 each have a paired banner side-panel</span>
      </div>`;
    wrap.appendChild(renderDefaultSlot());
    SLOTS.forEach(s => wrap.appendChild(renderSlot(s)));
  }

  renderAll();
  return wrap;
}

// ── Screen zone editor ────────────────────────────────────────────────────────
// Fractions of the displayed background IMAGE (same as original Q values)
const ZONE_DEFAULTS = {
  tl: [0.6442, 0.3273], tr: [0.7632, 0.2926],
  br: [0.7608, 0.4410], bl: [0.6411, 0.4542],
  bannerFrac: 0.24,
};

function buildScreenZoneEditor() {
  if (_zoneEditorCleanup) { _zoneEditorCleanup(); _zoneEditorCleanup = null; }

  const wrap = document.createElement('div');
  wrap.className = 'zone-editor';
  wrap.innerHTML = `
    <div class="zone-editor-header">
      Screen Layout Zones
      <span class="zone-editor-hint">Opens the live page so zones align with the real rendered layout at any zoom level</span>
    </div>
    <button type="button" class="hero-bg-btn primary js-ze-open" style="margin-top:8px;font-size:13px;padding:10px 18px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
      Open Zone Editor on Live Page
    </button>
  `;

  wrap.querySelector('.js-ze-open').addEventListener('click', function() {
    const modal = document.createElement('div');
    modal.id = 'zeModal';
    modal.innerHTML = `
      <div class="ze-modal-bar">
        <span class="ze-modal-title">Screen Zone Editor</span>
        <span class="ze-modal-hint">Use browser zoom (Ctrl +/−) to get closer · Drag corner handles · Drag the white split line to resize video/banner · Save inside the page</span>
        <button type="button" class="ze-modal-close" id="zeModalClose">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          Close
        </button>
      </div>
      <iframe class="ze-modal-iframe" src="/?editZones=1" id="zeModalIframe"></iframe>
    `;
    document.body.appendChild(modal);

    function closeModal() {
      modal.remove();
      window.removeEventListener('message', onMsg);
      fetch('/api/screen-zones').then(r => r.ok ? r.json() : null).then(z => {
        if (z) { screenZones = z; selectPage(activePage, true); }
      });
    }

    function onMsg(e) { if (e.data === 'zeClose') closeModal(); }
    window.addEventListener('message', onMsg);
    document.getElementById('zeModalClose').addEventListener('click', closeModal);
  });

  return wrap;
}

// ── Hero background widget ────────────────────────────────────────────────────
function heroBgToDataUrl(file) {
  return new Promise(function (resolve, reject) {
    var MAX = 1600;
    var reader = new FileReader();
    reader.onerror = reject;
    reader.onload = function () {
      var img = new Image();
      img.onerror = reject;
      img.onload = function () {
        var scale = Math.min(1, MAX / Math.max(img.width, img.height));
        var w = Math.round(img.width * scale);
        var h = Math.round(img.height * scale);
        var canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/webp', 0.88));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function buildHeroBgWidget(pageId) {
  const entry  = heroBgs[pageId];
  const imgSrc = entry ? (typeof entry === 'string' ? entry : entry.img) : null;
  const hasImg = !!imgSrc;
  const sliderSize = (entry && typeof entry === 'object' && entry.zoom != null) ? entry.zoom : 86;
  const sliderX    = (entry && typeof entry === 'object' && entry.posX != null) ? entry.posX : 100;
  const sliderY    = (entry && typeof entry === 'object' && entry.posY != null) ? entry.posY : 50;
  const sliderFade = (entry && typeof entry === 'object' && entry.fade != null) ? entry.fade : 60;

  const wrap = document.createElement('div');
  wrap.className = 'hero-bg-widget';

  const thumbHtml = hasImg
    ? `<img src="${imgSrc}" alt="Hero background">`
    : `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>`;

  const removeHtml = hasImg
    ? `<button type="button" class="hero-bg-btn danger js-hb-remove">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
        Remove
      </button>`
    : '';

  const posControlsHtml = hasImg ? `
    <div class="hb-fade-row">
      <div class="hb-fade-header">
        <span class="hb-pos-label">Overlay</span>
        <span class="hb-fade-hint">0 = no overlay · 100 = fully black</span>
      </div>
      <div class="hb-pos-row">
        <input type="range" min="0" max="100" value="${sliderFade}" step="1" class="hb-slider js-hb-fade">
        <span class="hb-pos-val js-hb-fade-val">${sliderFade}%</span>
      </div>
    </div>` : '';

  wrap.innerHTML = `
    <div class="hero-bg-thumb js-hb-thumb">${thumbHtml}</div>
    <div class="hero-bg-info">
      <div class="hero-bg-label">
        Hero Background Image
        <span class="badge">NL + EN shared</span>
      </div>
      <div class="hero-bg-status ${hasImg ? 'is-set' : ''} js-hb-status">
        ${hasImg ? '&#10003; Image uploaded' : 'No image set — hero shows default dark gradient'}
      </div>
      <div class="hero-bg-actions">
        <label class="hero-bg-btn primary js-hb-upload-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          <span class="js-hb-upload-text">${hasImg ? 'Replace image' : 'Upload image'}</span>
          <input type="file" accept="image/png,image/jpeg,image/webp,image/avif" hidden>
        </label>
        ${removeHtml}
      </div>
      ${posControlsHtml}
    </div>
  `;

  // Thumbnail click → open file picker
  wrap.querySelector('.js-hb-thumb').addEventListener('click', () => {
    wrap.querySelector('input[type="file"]').click();
  });

  // Upload
  wrap.querySelector('input[type="file"]').addEventListener('change', async function () {
    const file = this.files[0];
    if (!file) return;
    const labelText = wrap.querySelector('.js-hb-upload-text');
    labelText.textContent = 'Uploading…';
    try {
      const dataUrl = await heroBgToDataUrl(file);
      const resp = await fetch('/api/hero-bg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page: pageId, image: dataUrl })
      });
      if (resp.ok) {
        const prev = heroBgs[pageId];
        heroBgs[pageId] = {
          img:  dataUrl,
          zoom: (prev && typeof prev === 'object' && prev.zoom != null) ? prev.zoom : 86,
          posX: (prev && typeof prev === 'object' && prev.posX != null) ? prev.posX : 100,
          posY: (prev && typeof prev === 'object' && prev.posY != null) ? prev.posY : 50,
        };
        showToast('Hero background updated!', 'success');
        selectPage(activePage, true);
      } else {
        showToast('Upload failed', 'error');
        labelText.textContent = hasImg ? 'Replace image' : 'Upload image';
      }
    } catch (e) {
      showToast('Upload failed: ' + e.message, 'error');
      labelText.textContent = hasImg ? 'Replace image' : 'Upload image';
    }
    this.value = '';
  });

  // Remove
  const removeBtn = wrap.querySelector('.js-hb-remove');
  if (removeBtn) {
    removeBtn.addEventListener('click', async function () {
      try {
        await fetch('/api/hero-bg', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ page: pageId })
        });
        delete heroBgs[pageId];
        showToast('Hero background removed', 'success');
        selectPage(activePage, true);
      } catch (e) {
        showToast('Remove failed: ' + e.message, 'error');
      }
    });
  }

  // Fade slider — live value display + debounced PATCH save
  if (hasImg) {
    const fadeSlider = wrap.querySelector('.js-hb-fade');
    const fadeValEl  = wrap.querySelector('.js-hb-fade-val');
    let fadeDebounce;
    fadeSlider.addEventListener('input', function () {
      const val = parseInt(this.value, 10);
      fadeValEl.textContent = val + '%';
      clearTimeout(fadeDebounce);
      fadeDebounce = setTimeout(async () => {
        try {
          const resp = await fetch('/api/hero-bg', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ page: pageId, fade: val })
          });
          if (resp.ok) {
            if (heroBgs[pageId] && typeof heroBgs[pageId] === 'object') heroBgs[pageId].fade = val;
            showToast('Overlay darkness saved', 'success');
          } else {
            showToast('Save failed', 'error');
          }
        } catch (e) {
          showToast('Save failed: ' + e.message, 'error');
        }
      }, 600);
    });
  }

  return wrap;
}

// ── Section slot image widget ─────────────────────────────────────────────────
function buildSlotImageWidget(slotId, label) {
  const hasImg = !!slotImages[slotId];
  const wrap = document.createElement('div');
  wrap.className = 'hero-bg-widget';

  const thumbHtml = hasImg
    ? `<img src="${slotImages[slotId]}" alt="${label}">`
    : `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>`;

  const removeHtml = hasImg
    ? `<button type="button" class="hero-bg-btn danger js-si-remove">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
        Remove
      </button>`
    : '';

  wrap.innerHTML = `
    <div class="hero-bg-thumb js-si-thumb">${thumbHtml}</div>
    <div class="hero-bg-info">
      <div class="hero-bg-label">${label}</div>
      <div class="hero-bg-status ${hasImg ? 'is-set' : ''} js-si-status">
        ${hasImg ? '&#10003; Image uploaded' : 'No image set — placeholder shown'}
      </div>
      <div class="hero-bg-actions">
        <label class="hero-bg-btn primary js-si-upload-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          <span class="js-si-upload-text">${hasImg ? 'Replace image' : 'Upload image'}</span>
          <input type="file" accept="image/png,image/jpeg,image/webp,image/avif" hidden>
        </label>
        ${removeHtml}
      </div>
    </div>
  `;

  wrap.querySelector('.js-si-thumb').addEventListener('click', () => {
    wrap.querySelector('input[type="file"]').click();
  });

  wrap.querySelector('input[type="file"]').addEventListener('change', async function () {
    const file = this.files[0];
    if (!file) return;
    const labelText = wrap.querySelector('.js-si-upload-text');
    labelText.textContent = 'Uploading…';
    try {
      const dataUrl = await heroBgToDataUrl(file);
      const resp = await fetch('/api/slot-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slotId, image: dataUrl })
      });
      if (resp.ok) {
        slotImages[slotId] = dataUrl;
        showToast('Image updated!', 'success');
        selectPage(activePage, true);
      } else {
        showToast('Upload failed', 'error');
        labelText.textContent = hasImg ? 'Replace image' : 'Upload image';
      }
    } catch (e) {
      showToast('Upload failed: ' + e.message, 'error');
      labelText.textContent = hasImg ? 'Replace image' : 'Upload image';
    }
    this.value = '';
  });

  const removeBtn = wrap.querySelector('.js-si-remove');
  if (removeBtn) {
    removeBtn.addEventListener('click', async function () {
      try {
        await fetch('/api/slot-image', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slotId })
        });
        delete slotImages[slotId];
        showToast('Image removed', 'success');
        selectPage(activePage, true);
      } catch (e) {
        showToast('Remove failed: ' + e.message, 'error');
      }
    });
  }

  return wrap;
}

// ── Brand logos widget ────────────────────────────────────────────────────────
function buildBrandLogosWidget() {
  const wrap = document.createElement('div');
  wrap.className = 'brand-logos-widget';

  function render() {
    const s = brandLogosSettings;
    wrap.innerHTML = `
      <div class="field-label" style="margin-bottom:10px;">
        Brand Logos
        <span style="font-weight:400;text-transform:none;letter-spacing:0;color:var(--txt-muted);font-size:11px;margin-left:6px;">SVG or PNG · shared NL &amp; EN · max 1 MB each</span>
      </div>
      <div class="brand-logos-grid"></div>
      <div class="brand-logos-actions">
        <label class="hero-bg-btn primary js-bl-upload-label" style="cursor:pointer;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          Add logo
          <input type="file" accept="image/svg+xml,image/png" hidden multiple>
        </label>
        <div class="bl-setting">
          <span class="bl-setting-label">Size</span>
          <div class="typo-size-wrap" style="width:88px;">
            <input type="number" class="typo-size-input js-bl-size" value="${s.size}" min="16" max="120" step="2">
            <span class="typo-px">px</span>
          </div>
        </div>
        <div class="bl-setting">
          <span class="bl-setting-label">Color</span>
          <select class="typo-font-select js-bl-color" style="width:120px;">
            <option value="grey"     ${s.color === 'grey'     ? 'selected' : ''}>Grey</option>
            <option value="original" ${s.color === 'original' ? 'selected' : ''}>Original</option>
            <option value="white"    ${s.color === 'white'    ? 'selected' : ''}>White</option>
          </select>
        </div>
        <div class="bl-setting">
          <span class="bl-setting-label">Spacing</span>
          <div class="typo-size-wrap" style="width:88px;">
            <input type="number" class="typo-size-input js-bl-gap" value="${s.gap}" min="0" max="100" step="2">
            <span class="typo-px">px</span>
          </div>
        </div>
      </div>
    `;

    const grid = wrap.querySelector('.brand-logos-grid');
    if (brandLogos.length === 0) {
      grid.innerHTML = '<div class="brand-logos-empty">No logos yet — upload the first one below.</div>';
    } else {
      const imgStyle = logoImgStyle(brandLogosSettings);
      brandLogos.forEach((src, idx) => {
        const card = document.createElement('div');
        card.className = 'brand-logo-card';
        card.innerHTML = `
          <img src="${src}" alt="Brand logo ${idx + 1}" style="${imgStyle}">
          <button type="button" class="brand-logo-remove" title="Remove" data-idx="${idx}">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        `;
        grid.appendChild(card);
      });
    }

    // Remove handler
    grid.addEventListener('click', async e => {
      const btn = e.target.closest('.brand-logo-remove');
      if (!btn) return;
      const idx = parseInt(btn.dataset.idx, 10);
      brandLogos.splice(idx, 1);
      await saveBrandLogos();
      render();
    });

    // Settings controls
    wrap.querySelector('.js-bl-size').addEventListener('change', async function() {
      brandLogosSettings.size = Math.min(120, Math.max(16, parseInt(this.value, 10) || 36));
      this.value = brandLogosSettings.size;
      await saveBrandLogos();
      render();
    });
    wrap.querySelector('.js-bl-color').addEventListener('change', async function() {
      brandLogosSettings.color = this.value;
      await saveBrandLogos();
      render();
    });
    wrap.querySelector('.js-bl-gap').addEventListener('change', async function() {
      brandLogosSettings.gap = Math.min(100, Math.max(0, parseInt(this.value, 10) || 0));
      this.value = brandLogosSettings.gap;
      await saveBrandLogos();
      render();
    });

    // Upload handler — SVG and PNG read as-is (no canvas conversion)
    wrap.querySelector('input[type="file"]').addEventListener('change', async function() {
      const files = Array.from(this.files);
      if (!files.length) return;
      const label = wrap.querySelector('.js-bl-upload-label');
      label.style.opacity = '0.6';
      label.style.pointerEvents = 'none';
      const MAX_SIZE = 1024 * 1024; // 1 MB per logo
      let errors = [];
      try {
        for (const file of files) {
          if (file.size > MAX_SIZE) {
            errors.push(`"${file.name}" exceeds 1 MB`);
            continue;
          }
          if (file.type !== 'image/svg+xml' && file.type !== 'image/png') {
            errors.push(`"${file.name}" is not SVG or PNG`);
            continue;
          }
          const dataUrl = await new Promise((res, rej) => {
            const r = new FileReader();
            r.onerror = rej;
            r.onload = () => res(r.result);
            r.readAsDataURL(file);
          });
          brandLogos.push(dataUrl);
        }
        if (brandLogos.length > 0 || errors.length === 0) {
          await saveBrandLogos();
          render();
        }
        if (errors.length) showToast(errors.join(', '), 'error');
      } catch(e) {
        showToast('Upload failed: ' + e.message, 'error');
      }
      label.style.opacity = '';
      label.style.pointerEvents = '';
      this.value = '';
    });
  }

  render();
  return wrap;
}

function logoImgStyle(s) {
  const size = s.size || 36;
  if (s.color === 'grey')     return `height:${size}px;filter:grayscale(1);opacity:0.7;`;
  if (s.color === 'white')    return `height:${size}px;filter:brightness(0) invert(1);opacity:0.85;`;
  return `height:${size}px;opacity:0.85;`;
}

async function saveBrandLogos() {
  try {
    const resp = await fetch('/api/brand-logos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        logos: brandLogos,
        size:  brandLogosSettings.size,
        color: brandLogosSettings.color,
        gap:   brandLogosSettings.gap,
      })
    });
    if (resp.ok) {
      showToast('Brand logos saved!', 'success');
    } else {
      showToast('Failed to save logos', 'error');
    }
  } catch(e) {
    showToast('Save failed: ' + e.message, 'error');
  }
}

// ── Build sidebar ─────────────────────────────────────────────────────────────
function buildSidebar() {
  const nav = $('sidebarNav');
  nav.innerHTML = '';
  SCHEMA.forEach(page => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#" data-page="${page.id}">${page.icon}${page.label}</a>`;
    nav.appendChild(li);
  });
  const divLi = document.createElement('li');
  divLi.innerHTML = '<div class="sidebar-divider"></div>';
  nav.appendChild(divLi);
  const typoLi = document.createElement('li');
  const typoIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>';
  typoLi.innerHTML = `<a href="#" data-page="__typo">${typoIcon}Typography</a>`;
  nav.appendChild(typoLi);
  const logoLi = document.createElement('li');
  logoLi.innerHTML = '<a href="#" data-page="__logo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>Logo</a>';
  nav.appendChild(logoLi);
  const dsLi = document.createElement('li');
  const dsIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12h3m14 0h3M12 2v3m0 14v3M4.93 4.93l2.12 2.12m9.9 9.9 2.12 2.12M4.93 19.07l2.12-2.12m9.9-9.9 2.12-2.12"/></svg>';
  dsLi.innerHTML = `<a href="#" data-page="__design">${dsIcon}Design System</a>`;
  nav.appendChild(dsLi);
  nav.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (!a) return;
    if (!a.dataset.page) return; // let href links navigate normally
    e.preventDefault();
    selectPage(a.dataset.page);
  });
}

// ── Design System page ────────────────────────────────────────────────────────
function buildDesignSystemPage() {
  const main = $('mainArea');
  main.innerHTML = '';

  const hdr = document.createElement('div');
  hdr.className = 'page-header';
  hdr.innerHTML = '<h1>Design System</h1><p>Token reference, colour palette, typography scale and component previews. All values are defined in <code style="background:rgba(255,255,255,.07);padding:1px 6px;border-radius:3px;font-size:11px;">/styles/tokens.css</code>.</p>';
  main.appendChild(hdr);

  $('saveBtn').disabled = true;
  $('saveStatus').textContent = 'Design System — read only';

  const wrap = document.createElement('div');
  wrap.style.cssText = 'max-width:1000px;';
  main.appendChild(wrap);

  function section(title) {
    const s = document.createElement('div');
    s.className = 'section';
    s.style.marginBottom = '20px';
    s.innerHTML = `<div class="section-head" style="cursor:default;"><h2>${title}</h2></div><div class="section-body ds-sb" style="padding:18px 22px;flex-wrap:wrap;gap:10px;"></div>`;
    wrap.appendChild(s);
    return s.querySelector('.ds-sb');
  }

  // ── Editable Colour Palette ──────────────────────────────────────────
  const PALETTE = [
    { name:'Brand Orange',  cssVar:'--color-primary',       def:'#EB5E28' },
    { name:'Orange Hover',  cssVar:'--color-primary-hover', def:'#d4541f' },
    { name:'Hero Yellow',   cssVar:'--color-accent',        def:'#F7B500' },
    { name:'Dark Surface',  cssVar:'--bg-dark',             def:'#0c0c0c' },
    { name:'Ink',           cssVar:'--bg-ink',              def:'#141414' },
    { name:'Panel',         cssVar:'--bg-panel',            def:'#171717' },
    { name:'Elevated',      cssVar:'--bg-elevated',         def:'#1a1a1a' },
    { name:'Light BG',      cssVar:'--bg-light',            def:'#f3f3f3' },
    { name:'Text Primary',  cssVar:'--text-primary',        def:'#161616' },
    { name:'Text Secondary',cssVar:'--text-secondary',      def:'#6f6f6f' },
    { name:'Text Light',    cssVar:'--text-light',          def:'#cfcfcf' },
    { name:'Success',       cssVar:'--color-success',       def:'#4caf50' },
    { name:'Error',         cssVar:'--color-error',         def:'#ff5252' },
  ];

  // palette state: cssVar → current hex
  const palState = {};
  PALETTE.forEach(p => { palState[p.cssVar] = p.def; });

  // Section with Save button in header
  const palCard = document.createElement('div');
  palCard.className = 'section';
  palCard.style.marginBottom = '20px';
  palCard.innerHTML = `
    <div class="section-head" style="cursor:default;">
      <h2>Colour Palette</h2>
      <button id="palSaveBtn" style="margin-left:auto;background:#EB5E28;color:#fff;border:none;border-radius:5px;
        padding:7px 16px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;
        transition:background .15s;">Save Colours</button>
    </div>
    <div id="palGrid" style="padding:20px 22px;display:flex;flex-wrap:wrap;gap:14px;"></div>`;
  wrap.appendChild(palCard);

  const palGrid = palCard.querySelector('#palGrid');

  function renderSwatch(p, savedHex) {
    const hex = savedHex || p.def;
    palState[p.cssVar] = hex;
    const div = document.createElement('div');
    div.style.cssText = 'width:96px;display:flex;flex-direction:column;gap:5px;';
    div.innerHTML = `
      <div style="position:relative;height:52px;border-radius:6px;background:${hex};
        border:1px solid rgba(255,255,255,.1);cursor:pointer;overflow:hidden;"
        title="Click to change colour">
        <input type="color" value="${hex}" data-var="${p.cssVar}"
          style="position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:pointer;border:none;padding:0;">
      </div>
      <div style="font-size:10px;font-weight:600;color:var(--txt-label);line-height:1.3;">${p.name}</div>
      <input type="text" value="${hex}" data-var="${p.cssVar}" maxlength="7"
        style="font-family:monospace;font-size:10px;color:var(--txt);background:#141414;
          border:1px solid rgba(255,255,255,.1);border-radius:3px;padding:3px 5px;
          width:100%;outline:none;">`;

    const colorPick = div.querySelector('input[type="color"]');
    const hexInput  = div.querySelector('input[type="text"]');
    const swatch    = div.querySelector('div[style*="cursor:pointer"]');

    function apply(v) {
      if (!/^#[0-9a-fA-F]{6}$/.test(v)) return;
      palState[p.cssVar] = v;
      swatch.style.background = v;
      colorPick.value = v;
      hexInput.value = v;
      // Live-preview on the admin page itself
      document.documentElement.style.setProperty(p.cssVar, v);
    }

    colorPick.addEventListener('input', function(){ apply(this.value); });
    hexInput.addEventListener('change', function(){
      const v = this.value.trim();
      if (/^#[0-9a-fA-F]{6}$/.test(v)) apply(v);
      else this.value = palState[p.cssVar];
    });
    palGrid.appendChild(div);
  }

  // Render swatches with defaults first, then overlay saved values
  PALETTE.forEach(p => renderSwatch(p, null));
  fetch('/api/admin/design-tokens').then(r => r.ok ? r.json() : {}).then(saved => {
    if (!saved) return;
    PALETTE.forEach(p => {
      if (saved[p.cssVar]) {
        // Re-render that swatch with saved colour
        const inputs = palGrid.querySelectorAll(`[data-var="${p.cssVar}"]`);
        inputs.forEach(el => { el.value = saved[p.cssVar]; });
        const swatches = palGrid.querySelectorAll(`div[style*="background"]`);
        // simpler: just re-apply via CSS var
        palState[p.cssVar] = saved[p.cssVar];
        document.documentElement.style.setProperty(p.cssVar, saved[p.cssVar]);
        inputs.forEach(el => {
          if (el.tagName === 'INPUT') {
            const parent = el.closest('div[style*="height:52px"]') || el.parentElement;
            if (parent && parent.style) parent.style.background = saved[p.cssVar];
          }
        });
      }
    });
  }).catch(() => {});

  palCard.querySelector('#palSaveBtn').addEventListener('click', async function() {
    const btn = this;
    btn.textContent = 'Saving…'; btn.disabled = true;
    try {
      const r = await fetch('/api/admin/design-tokens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tokens: palState })
      });
      if (!r.ok) throw new Error('Save failed');
      showToast('Colours saved — reload website to see changes', 'success');
    } catch(e) { showToast(e.message, 'error'); }
    btn.textContent = 'Save Colours'; btn.disabled = false;
  });

  // Typography
  const tb = section('Typography Scale');
  tb.style.cssText = 'padding:0 22px;display:flex;flex-direction:column;';
  [['10px','Extra extra small'],['11px','Caption text'],['12px','Small — labels'],
   ['13.5px','Base body text'],['14px','Buttons, nav'],['15px','Section body'],
   ['17px','Hero subtitle'],['19px','Brand names'],['23px','Stat numbers'],
   ['34px','Network heading'],['40px','Section headings'],['clamp(40px,5vw,60px)','Page hero h1']
  ].forEach(([sz,use]) => {
    tb.innerHTML += `<div style="display:flex;align-items:baseline;gap:16px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.06);"><div style="width:160px;flex:none;font-size:11px;font-weight:600;color:var(--txt-label);font-family:monospace;">${sz}</div><div style="color:var(--txt);font-size:${sz};line-height:1.1;">${use}</div></div>`;
  });

  // Buttons
  const bb = section('Button System');
  bb.style.cssText = 'padding:18px 22px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;';
  bb.innerHTML = `
    <button class="btn btn-yellow" style="background:#EB5E28;color:#fff;display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:14px;padding:11px 20px;border-radius:4px;border:none;cursor:pointer;">Primary</button>
    <button style="background:#0c0c0c;color:#fff;display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:14px;padding:11px 20px;border-radius:4px;border:none;cursor:pointer;">Secondary</button>
    <button style="background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.4);display:inline-flex;align-items:center;font-weight:700;font-size:14px;padding:10px 20px;border-radius:4px;cursor:pointer;">Outline</button>
    <button style="background:transparent;color:#0c0c0c;border:1.5px solid rgba(0,0,0,.3);display:inline-flex;align-items:center;font-weight:700;font-size:14px;padding:10px 20px;border-radius:4px;cursor:pointer;background:#f3f3f3;">Ghost</button>
    <span style="font-size:11px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:4px;padding:3px 8px;color:var(--txt-muted);">Default badge</span>
    <span style="font-size:11px;background:rgba(235,94,40,.12);border:1px solid rgba(235,94,40,.3);border-radius:4px;padding:3px 8px;color:#EB5E28;">Primary badge</span>
    <span style="font-size:11px;background:rgba(76,175,80,.12);border:1px solid rgba(76,175,80,.3);border-radius:4px;padding:3px 8px;color:#7fde7f;">Success</span>
    <span style="font-size:11px;background:rgba(255,82,82,.12);border:1px solid rgba(255,82,82,.3);border-radius:4px;padding:3px 8px;color:#ff8989;">Error</span>`;

  // Border radius
  const rb = section('Border Radius');
  rb.style.cssText = 'padding:18px 22px;display:flex;flex-wrap:wrap;gap:16px;align-items:flex-end;';
  [['xs','2px'],['sm','4px'],['md','6px'],['lg','8px'],['xl','12px'],['2xl','14px']].forEach(([n,v]) => {
    rb.innerHTML += `<div style="display:flex;flex-direction:column;align-items:center;gap:7px;"><div style="width:52px;height:52px;background:#EB5E28;opacity:.8;border-radius:${v};"></div><div style="font-size:10px;color:var(--txt-muted);font-family:monospace;text-align:center;">${n}<br>${v}</div></div>`;
  });

  // Shadows
  const sb = section('Shadows');
  sb.style.cssText = 'padding:18px 22px;display:flex;flex-wrap:wrap;gap:20px;';
  [['xs','0 1px 4px rgba(0,0,0,.08)'],['sm','0 12px 30px rgba(0,0,0,.05)'],
   ['md','0 12px 30px rgba(0,0,0,.10)'],['lg','0 18px 40px rgba(0,0,0,.12)'],
   ['dark','0 8px 24px rgba(0,0,0,.5)']].forEach(([n,v]) => {
    sb.innerHTML += `<div style="text-align:center;"><div style="width:86px;height:52px;background:#202020;border-radius:6px;box-shadow:${v};"></div><div style="font-size:10px;color:var(--txt-muted);margin-top:6px;font-family:monospace;">--shadow-${n}</div></div>`;
  });

  // Token reference
  const tok = section('Token Reference');
  tok.style.cssText = 'padding:0;display:block;overflow:auto;';
  const table = document.createElement('table');
  table.style.cssText = 'width:100%;border-collapse:collapse;font-size:12px;';
  table.innerHTML = `<thead><tr style="border-bottom:1px solid rgba(255,255,255,.09);">
    <th style="text-align:left;padding:9px 22px;color:var(--txt-muted);font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;">Token</th>
    <th style="text-align:left;padding:9px 22px;color:var(--txt-muted);font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;">Value</th>
    <th style="text-align:left;padding:9px 22px;color:var(--txt-muted);font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;">Use</th>
  </tr></thead><tbody></tbody>`;
  [['--color-primary','#EB5E28','Brand accent — all non-hero sections'],
   ['--color-accent','#F7B500','Legacy accent — hero & header only'],
   ['--bg-dark','#0c0c0c','Primary dark surface'],
   ['--text-primary','#161616','Main body text'],
   ['--text-secondary','#6f6f6f','Muted body text'],
   ['--border-hairline','rgba(255,255,255,.12)','Dark-theme separator'],
   ['--radius-sm','4px','Buttons, small elements'],
   ['--radius-md','6px','Cards, panels'],
   ['--shadow-sm','0 12px 30px rgba(0,0,0,.05)','Light card shadow'],
   ['--font-sans','"Helvetica Neue", Arial','Primary typeface'],
   ['--transition-base','.15s ease','Standard duration'],
  ].forEach(([tok,val,use]) => {
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid rgba(255,255,255,.05)';
    tr.innerHTML = `<td style="padding:8px 22px;font-family:monospace;color:var(--txt);">${tok}</td><td style="padding:8px 22px;font-family:monospace;color:#EB5E28;">${val}</td><td style="padding:8px 22px;color:var(--txt-muted);">${use}</td>`;
    table.querySelector('tbody').appendChild(tr);
  });
  tok.appendChild(table);
}

// ── Logo settings page ────────────────────────────────────────────────────────
function buildLogoPage() {
  const main = $('mainArea');
  main.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'page-header';
  header.innerHTML = '<h1>Logo &amp; Titel</h1><p>Beheer het logo en de naam van de website.</p>';
  main.appendChild(header);

  const card = document.createElement('div');
  card.style.cssText = 'display:flex;flex-direction:column;gap:22px;max-width:700px;';
  card.innerHTML = `
    <style>
      .lp-card{background:var(--panel-bg);border:1px solid var(--border);border-radius:8px;padding:24px;}
      .lp-card-title{font-size:14px;font-weight:700;color:#fff;margin-bottom:3px;}
      .lp-card-sub{font-size:12.5px;color:var(--txt-muted);margin-bottom:18px;}
      .lp-badge{font-size:11px;font-weight:600;color:var(--txt-muted);background:rgba(255,255,255,.06);border:1px solid var(--border);border-radius:5px;padding:4px 10px;}
      .lp-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
      .lp-col-label{font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#666;margin-bottom:8px;}
      .lp-current{background:#141414;border:1px solid rgba(255,255,255,.08);border-radius:7px;height:120px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
      .lp-current img{max-height:60px;max-width:80%;object-fit:contain;}
      .lp-no-logo{color:#444;font-size:12px;text-align:center;line-height:1.6;}
      .lp-del{position:absolute;top:7px;right:7px;background:rgba(255,82,82,.85);color:#fff;border:none;border-radius:4px;padding:4px 9px;font-size:11px;font-weight:600;cursor:pointer;opacity:0;transition:opacity .15s;font-family:inherit;}
      .lp-current:hover .lp-del{opacity:1;}
      .lp-zone{background:#141414;border:1.5px dashed rgba(255,255,255,.18);border-radius:7px;height:120px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;cursor:pointer;transition:border-color .2s,background .2s;text-align:center;padding:14px;}
      .lp-zone:hover,.lp-zone.over{border-color:rgba(235,94,40,.6);background:rgba(235,94,40,.05);}
      .lp-zone svg{color:#555;}
      .lp-zone-main{color:#ccc;font-size:13px;font-weight:500;}
      .lp-zone-sub{color:#555;font-size:11px;}
      .lp-size-row{display:flex;align-items:center;gap:14px;margin-bottom:6px;}
      .lp-size-lbl{font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#666;width:64px;flex:none;}
      .lp-slider{flex:1;-webkit-appearance:none;appearance:none;height:4px;border-radius:2px;background:linear-gradient(to right,#EB5E28 0%,#EB5E28 var(--p,22%),rgba(255,255,255,.12) var(--p,22%),rgba(255,255,255,.12) 100%);outline:none;cursor:pointer;}
      .lp-slider::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.5);cursor:pointer;}
      .lp-slider::-moz-range-thumb{width:16px;height:16px;border:none;border-radius:50%;background:#fff;cursor:pointer;}
      .lp-num-wrap{display:flex;align-items:center;gap:5px;}
      .lp-num{width:54px;font-family:inherit;font-size:13px;font-weight:700;color:#fff;text-align:right;background:#141414;border:1px solid rgba(255,255,255,.12);border-radius:4px;padding:5px 7px;outline:none;}
      .lp-num:focus{border-color:rgba(235,94,40,.5);}
      .lp-unit{font-size:11px;color:#555;}
      .lp-range-hint{display:flex;justify-content:space-between;font-size:10px;color:#444;padding:3px 1px 14px;}
      .lp-hint{font-size:11px;color:#555;margin-top:4px;}
    </style>

    <!-- Upload card -->
    <div class="lp-card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:18px;">
        <div><div class="lp-card-title">Website Logo</div><div class="lp-card-sub">Wordt getoond in de navigatiebalk</div></div>
        <div class="lp-badge">PNG · SVG · max 2 MB</div>
      </div>
      <div class="lp-grid">
        <div>
          <div class="lp-col-label">Huidig Logo</div>
          <div class="lp-current" id="lpCurrentBox">
            <img id="lpCurrentImg" src="" alt="" style="display:none;">
            <div class="lp-no-logo" id="lpNoLogo">Geen logo<br>ingesteld</div>
            <button class="lp-del" id="lpDelBtn" type="button" style="display:none;">✕ Verwijder</button>
          </div>
        </div>
        <div>
          <div class="lp-col-label">Nieuw Uploaden</div>
          <div class="lp-zone" id="lpZone">
            <input type="file" id="lpFile" accept="image/png,image/svg+xml,image/webp" hidden>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <div class="lp-zone-main" id="lpZoneMain">Klik om te uploaden</div>
            <div class="lp-zone-sub">PNG of SVG aanbevolen</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Size card -->
    <div class="lp-card">
      <div class="lp-card-title">Logo Afmetingen</div>
      <div class="lp-card-sub">Breedte en hoogte in de navigatiebalk (px)</div>
      <div class="lp-size-row">
        <div class="lp-size-lbl">Breedte</div>
        <input type="range"  class="lp-slider" id="lpWS" min="40" max="400" value="130">
        <div class="lp-num-wrap"><input type="number" class="lp-num" id="lpWN" min="40" max="400" value="130"><span class="lp-unit">px</span></div>
      </div>
      <div class="lp-range-hint"><span>40</span><span>400</span></div>
      <div class="lp-size-row">
        <div class="lp-size-lbl">Hoogte</div>
        <input type="range"  class="lp-slider" id="lpHS" min="16" max="100" value="36">
        <div class="lp-num-wrap"><input type="number" class="lp-num" id="lpHN" min="16" max="100" value="36"><span class="lp-unit">px</span></div>
      </div>
      <div class="lp-range-hint"><span>16</span><span>100</span></div>
      <div class="lp-hint">Standaard: <b style="color:#aaa;">130 × 36 px</b></div>
    </div>
  `;
  main.appendChild(card);

  $('saveBtn').disabled = false;
  $('saveStatus').textContent = 'Logo instellingen';

  // ── Logo page state & logic ──────────────────────────
  let lpSrc = null;
  const lpW = () => parseInt($('lpWN').value) || 130;
  const lpH = () => parseInt($('lpHN').value) || 36;

  function lpFill(el) {
    const min = +el.min, max = +el.max, v = +el.value;
    el.style.setProperty('--p', ((v - min) / (max - min) * 100).toFixed(1) + '%');
  }

  function lpLink(sId, nId, min, max) {
    const s = $(sId), n = $(nId);
    function set(v) { v = Math.max(min, Math.min(max, parseInt(v)||min)); s.value = n.value = v; lpFill(s); }
    s.addEventListener('input', () => set(s.value));
    n.addEventListener('change', () => set(n.value));
    lpFill(s);
  }
  lpLink('lpWS','lpWN',40,400);
  lpLink('lpHS','lpHN',16,100);

  function lpShowLogo(src) {
    const img = $('lpCurrentImg'), msg = $('lpNoLogo'), del = $('lpDelBtn');
    lpSrc = src;
    if (src) {
      img.src = src + '?t=' + Date.now(); img.style.display = 'block';
      msg.style.display = 'none'; del.style.display = '';
    } else {
      img.style.display = 'none'; msg.style.display = ''; del.style.display = 'none';
    }
  }

  function fileToDataUrl(file) {
    return new Promise((res,rej) => { const r = new FileReader(); r.onerror=rej; r.onload=()=>res(r.result); r.readAsDataURL(file); });
  }

  async function lpUpload(file) {
    if (!file || !file.type.startsWith('image/')) { showToast('Kies een afbeelding','error'); return; }
    if (file.size > 2*1024*1024) { showToast('Max 2 MB','error'); return; }
    $('lpZoneMain').textContent = 'Uploaden…';
    try {
      const dataUrl = await fileToDataUrl(file);
      const r = await fetch('/api/admin/logo-upload',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({data:dataUrl})});
      const j = await r.json();
      if (!r.ok) throw new Error(j.error||r.status);
      lpShowLogo(j.url);
      showToast('Logo geüpload!','success');
    } catch(e) { showToast('Upload mislukt: '+e.message,'error'); }
    $('lpZoneMain').textContent = 'Klik om te uploaden';
    $('lpFile').value = '';
  }

  $('lpZone').addEventListener('click', () => $('lpFile').click());
  $('lpFile').addEventListener('change', function(){ if(this.files[0]) lpUpload(this.files[0]); });
  const z = $('lpZone');
  z.addEventListener('dragover', e => { e.preventDefault(); z.classList.add('over'); });
  z.addEventListener('dragleave', () => z.classList.remove('over'));
  z.addEventListener('drop', e => { e.preventDefault(); z.classList.remove('over'); if(e.dataTransfer.files[0]) lpUpload(e.dataTransfer.files[0]); });

  $('lpDelBtn').addEventListener('click', async function(e) {
    e.stopPropagation();
    try {
      const r = await fetch('/api/admin/logo-upload',{method:'DELETE',headers:{'Content-Type':'application/json'}});
      if (!r.ok) throw new Error('Mislukt');
      lpShowLogo(null); showToast('Logo verwijderd','success');
    } catch(e) { showToast(e.message,'error'); }
  });

  // Save button
  $('saveBtn').onclick = async function() {
    $('saveBtn').disabled = true; $('saveBtn').innerHTML = SAVE_BTN_HTML.replace('Save changes','Opslaan…');
    try {
      const r = await fetch('/api/admin/logo-settings',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({width:lpW(),height:lpH()})});
      if (!r.ok) throw new Error('Opslaan mislukt');
      showToast('Opgeslagen!','success');
    } catch(e) { showToast(e.message,'error'); }
    $('saveBtn').disabled = false; $('saveBtn').innerHTML = SAVE_BTN_HTML;
  };

  // Load current settings
  fetch('/api/logo-settings').then(r=>r.ok?r.json():null).then(s=>{
    if (!s) return;
    if (s.src) lpShowLogo(s.src);
    if (s.width)  { $('lpWS').value = s.width;  $('lpWN').value = s.width;  lpFill($('lpWS')); }
    if (s.height) { $('lpHS').value = s.height; $('lpHN').value = s.height; lpFill($('lpHS')); }
  }).catch(()=>{});
}

// ── Typography page ───────────────────────────────────────────────────────────
function buildTypographyPage() {
  const main = $('mainArea');
  main.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'page-header';
  header.innerHTML = '<h1>Typography</h1><p>Control font size, family, and colour for text elements across the website. Changes apply to all pages.</p>';
  main.appendChild(header);

  TYPO_SCHEMA.forEach(group => {
    const secEl = document.createElement('div');
    secEl.className = 'section';
    const elemCount = group.elements.length;
    secEl.innerHTML = `
      <div class="section-head">
        <h2>${group.title}</h2>
        <span class="typo-section-badge">${elemCount} element${elemCount !== 1 ? 's' : ''}</span>
        <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="section-body typo-body"></div>
    `;
    const body = secEl.querySelector('.typo-body');

    group.elements.forEach(el => {
      const cur = typoSettings[el.key] || {};
      const curSize  = cur.size  !== undefined ? cur.size  : (el.size || '');
      const curFont  = cur.font  || el.font || 'sans';
      const curColor = cur.color || el.color || '#ffffff';
      const isColorOnly = !!el.colorOnly;
      const isNoColor   = !!el.noColor;

      const fontOptsHtml = FONT_OPTIONS.map(f =>
        `<option value="${f.value}"${curFont === f.value ? ' selected' : ''}>${f.label}</option>`
      ).join('');

      const row = document.createElement('div');
      row.className = isColorOnly ? 'typo-row typo-row-color-only'
                    : isNoColor   ? 'typo-row typo-row-no-color'
                    : 'typo-row';
      row.innerHTML = isColorOnly
        ? `<div class="typo-row-label">${escHtml(el.label)}</div>
           <input type="color" class="typo-color-input typo-field" data-key="${el.key}" data-prop="color" value="${curColor}">`
        : isNoColor
        ? `<div class="typo-row-label">${escHtml(el.label)}</div>
           <div class="typo-size-wrap">
             <input type="number" class="typo-size-input typo-field" data-key="${el.key}" data-prop="size" value="${curSize}" min="6" max="200" step="0.5">
             <span class="typo-px">px</span>
           </div>
           <select class="typo-font-select typo-field" data-key="${el.key}" data-prop="font">${fontOptsHtml}</select>`
        : `<div class="typo-row-label">${escHtml(el.label)}</div>
           <div class="typo-size-wrap">
             <input type="number" class="typo-size-input typo-field" data-key="${el.key}" data-prop="size" value="${curSize}" min="6" max="200" step="0.5">
             <span class="typo-px">px</span>
           </div>
           <select class="typo-font-select typo-field" data-key="${el.key}" data-prop="font">${fontOptsHtml}</select>
           <input type="color" class="typo-color-input typo-field" data-key="${el.key}" data-prop="color" value="${curColor}">`;
      body.appendChild(row);
    });

    secEl.querySelector('.section-head').addEventListener('click', () => {
      secEl.classList.toggle('collapsed');
    });

    main.appendChild(secEl);
  });

  $('saveBtn').disabled = false;
  $('saveStatus').textContent = 'Editing: Typography';
}

function collectCurrentTypography() {
  document.querySelectorAll('.typo-field').forEach(el => {
    const key  = el.dataset.key;
    const prop = el.dataset.prop;
    if (!key || !prop) return;
    if (el.value === '' || el.value === null) return; // skip empty (colorOnly rows have no size/font)
    if (!typoSettings[key]) typoSettings[key] = {};
    typoSettings[key][prop] = el.value;
  });
}

// ── Collect values from form into allContent ──────────────────────────────────
function collectCurrentValues() {
  document.querySelectorAll('.cms-field').forEach(el => {
    const key = el.dataset.key;
    const lang = el.dataset.lang;
    if (key && lang) deepSet(allContent[lang], key, el.value);
  });
}

// ── Render page content ───────────────────────────────────────────────────────
function selectPage(pageId, preserveScroll = false) {
  activePage = pageId;
  $('saveBtn').onclick = null; // reset any page-specific handler

  // Update sidebar active state
  document.querySelectorAll('#sidebarNav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });

  if (pageId === '__typo')   { buildTypographyPage();   return; }
  if (pageId === '__logo')   { buildLogoPage();          return; }
  if (pageId === '__design') { buildDesignSystemPage();  return; }

  const page = SCHEMA.find(p => p.id === pageId);
  if (!page) return;

  const main = $('mainArea');
  const scrollTop = preserveScroll ? main.scrollTop : 0;

  main.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'page-header';
  header.innerHTML = `<h1>${page.label}</h1><p>Edit content for the ${page.label.toLowerCase()} page — both languages side by side.</p>`;
  main.appendChild(header);

  page.sections.forEach(section => {
    const secEl = document.createElement('div');
    secEl.className = 'section';
    secEl.innerHTML = `
      <div class="section-head">
        <h2>${section.title}</h2>
        <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="section-body"></div>
    `;
    const body = secEl.querySelector('.section-body');

    // ── Shared widgets (full-width, language-independent) ─────────────────────
    if ((HERO_BG_PAGES.includes(pageId) && section.title === 'Page hero') ||
        (pageId === 'home' && section.title === 'Hero')) {
      const wr = document.createElement('div');
      wr.className = 'field-row widget';
      wr.appendChild(buildHeroBgWidget(pageId));
      body.appendChild(wr);
    }
    if (pageId === 'home' && section.title === 'Hero') {
      const wr = document.createElement('div');
      wr.className = 'field-row widget';
      wr.appendChild(buildScreenZoneEditor());
      body.appendChild(wr);
      const wr2 = document.createElement('div');
      wr2.className = 'field-row widget';
      wr2.appendChild(buildHeroMediaWidget());
      body.appendChild(wr2);
    }
    if (pageId === 'home' && section.title === 'Brands strip') {
      const wr = document.createElement('div');
      wr.className = 'field-row widget';
      wr.appendChild(buildBrandLogosWidget());
      body.appendChild(wr);
    }
    if (pageId === 'home' && section.title === 'Amsterdam / Network section') {
      const wr = document.createElement('div');
      wr.className = 'field-row widget';
      wr.appendChild(buildSlotImageWidget('net-taxi', 'Right-side Photo (Amsterdam Network section)'));
      body.appendChild(wr);
    }
    if (pageId === 'home' && section.title === 'CTA section') {
      const wr = document.createElement('div');
      wr.className = 'field-row widget';
      wr.appendChild(buildSlotImageWidget('cta-image', 'Right-side Image (CTA section)'));
      body.appendChild(wr);
    }

    // ── Language column headers ────────────────────────────────────────────────
    if (section.fields.length > 0) {
      const biHead = document.createElement('div');
      biHead.className = 'bilingual-head';
      biHead.innerHTML = '<div>🇳🇱 <strong>Nederlands</strong></div><div>🇬🇧 <strong>English</strong></div>';
      body.appendChild(biHead);
    }

    // ── Bilingual field rows ───────────────────────────────────────────────────
    section.fields.forEach(field => {
      const row = document.createElement('div');
      row.className = 'field-row';
      const isTextarea = field.type === 'textarea';
      const valNl = deepGet(allContent.nl, field.key);
      const valEn = deepGet(allContent.en, field.key);
      const taClass = `field-textarea cms-field${field.full ? ' tall' : ''}`;
      row.innerHTML = `
        <div class="field-row-label">${field.label}</div>
        <div class="field-row-inputs">
          ${isTextarea
            ? `<textarea class="${taClass}" data-key="${field.key}" data-lang="nl">${escHtml(valNl)}</textarea>
               <textarea class="${taClass}" data-key="${field.key}" data-lang="en">${escHtml(valEn)}</textarea>`
            : `<input class="field-input cms-field" type="text" value="${escAttr(valNl)}" data-key="${field.key}" data-lang="nl">
               <input class="field-input cms-field" type="text" value="${escAttr(valEn)}" data-key="${field.key}" data-lang="en">`
          }
        </div>
      `;
      body.appendChild(row);
    });

    // Toggle collapse
    secEl.querySelector('.section-head').addEventListener('click', () => {
      secEl.classList.toggle('collapsed');
    });

    main.appendChild(secEl);
  });

  $('saveBtn').disabled = false;
  $('saveStatus').textContent = `Editing: ${page.label}`;

  if (preserveScroll) main.scrollTop = scrollTop;
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function escAttr(str) {
  return String(str).replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

// ── Save ──────────────────────────────────────────────────────────────────────
const SAVE_BTN_HTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg> Save changes';

async function save() {
  if (activePage === '__typo') {
    await saveTypography();
  } else {
    await saveContent();
  }
}

async function saveContent() {
  collectCurrentValues();
  const btn = $('saveBtn');
  btn.disabled = true;
  btn.textContent = 'Saving…';
  try {
    const results = await Promise.all(['nl', 'en'].map(lang =>
      fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, data: allContent[lang] })
      }).then(r => r.json())
    ));
    if (results.every(r => r.ok)) {
      showToast('Content saved successfully!', 'success');
    } else {
      showToast('Some changes failed to save.', 'error');
    }
  } catch (err) {
    showToast('Save failed: ' + err.message, 'error');
  }
  btn.disabled = false;
  btn.innerHTML = SAVE_BTN_HTML;
}

async function saveTypography() {
  collectCurrentTypography();
  const btn = $('saveBtn');
  btn.disabled = true;
  btn.textContent = 'Saving…';
  try {
    const result = await fetch('/api/typography', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: typoSettings })
    }).then(r => r.json());
    if (result.ok) {
      showToast('Typography saved!', 'success');
    } else {
      showToast('Save failed.', 'error');
    }
  } catch (err) {
    showToast('Save failed: ' + err.message, 'error');
  }
  btn.disabled = false;
  btn.innerHTML = SAVE_BTN_HTML;
}

// ── Init ──────────────────────────────────────────────────────────────────────
async function init() {
  // Auth check
  try {
    const check = await fetch('/api/auth/check').then(r => r.json());
    if (!check.admin) { window.location.href = '/admin/'; return; }
  } catch {
    window.location.href = '/admin/'; return;
  }

  // Load content and hero backgrounds
  try {
    [allContent, heroBgs] = await Promise.all([
      fetch('/api/content/all').then(r => r.json()),
      fetch('/api/hero-bg').then(r => r.json())
    ]);
  } catch (e) {
    $('loadingMsg').textContent = 'Failed to load content. ' + e.message;
    return;
  }
  try {
    slotImages = await fetch('/api/slot-image').then(r => r.ok ? r.json() : {});
  } catch (e) {
    slotImages = {};
  }
  try {
    const bl = await fetch('/api/brand-logos').then(r => r.ok ? r.json() : {});
    brandLogos = Array.isArray(bl.logos) ? bl.logos : (Array.isArray(bl) ? bl : []);
    brandLogosSettings = { size: bl.size || 36, color: bl.color || 'grey', gap: bl.gap ?? 10 };
  } catch (e) {
    brandLogos = [];
    brandLogosSettings = { size: 36, color: 'grey', gap: 10 };
  }
  try {
    typoSettings = await fetch('/api/typography').then(r => r.ok ? r.json() : {});
  } catch (e) {
    typoSettings = {};
  }
  try {
    screenZones = await fetch('/api/screen-zones').then(r => r.ok ? r.json() : null);
  } catch (e) {
    screenZones = null;
  }
  try {
    heroMedia = await fetch('/api/hero-media').then(r => r.ok ? r.json() : { videos: {}, banners: {} });
  } catch (e) {
    heroMedia = { videos: {}, banners: {} };
  }

  buildSidebar();
  selectPage(SCHEMA[0].id);

  $('saveBtn').addEventListener('click', save);
  $('logoutBtn').addEventListener('click', async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/admin/';
  });
}

document.addEventListener('DOMContentLoaded', init);

