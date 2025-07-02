# DLB Elite Website

A modern, SEO-friendly Next.js website for Camden White's DLB Elite Defensive Line & Linebacker training.

## 🏈 Features

- **Modern Design**: Eye-catching hero section with Framer Motion animations, parallax effects, and Lottie animations
- **SEO Optimized**: Built with next-seo for optimal search engine visibility
- **Contact Forms**: Integrated contact form with email notifications
- **Calendly Integration**: Direct booking system for training sessions
- **Responsive**: Mobile-first design with Tailwind CSS
- **Fast & Scalable**: Serverless architecture ready for Vercel deployment

## 🎨 Brand Colors

- **Primary**: #000000 (Black)
- **Secondary**: #D4AF37 (Gold)
- **Accent**: #FFFFFF (White)
- **Slate**: #4A4A4A (Grey)
- **Light**: #F5F5F5 (Off-white)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

✅ **Already configured with Camden's details:**

```env
# SMTP Configuration for contact form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=camwhite52@icloud.com
SMTP_PASS=your-app-password  # ⚠️ NEEDS UPDATE

# Contact email destination (✅ SET)
CONTACT_EMAIL=camwhite52@icloud.com

# Calendly booking URL (✅ SET)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/camwhite52
```

**Next Step**: Update `SMTP_PASS` with your iCloud app password (see Email Setup section below)

### 3. Add Your Content

- Replace `/public/logo.png` with your actual DLB Elite logo
- Replace `/public/hero.jpg` with a high-quality hero image
- Add training photos to `/public/gallery/`
- Update Lottie animation in `/public/animations/football.json`

### 4. Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
dlb-elite/
├─ public/
│   ├─ logo.png                  # DLB Elite logo
│   ├─ hero.jpg                  # Hero background image
│   ├─ animations/
│   │   └─ football.json         # Lottie animation
│   └─ gallery/                  # Training photos
├─ pages/api/
│   └─ contact.ts                # Contact form handler
├─ src/
│   ├─ app/                      # Next.js App Router pages
│   ├─ components/               # Reusable components
│   ├─ hooks/                    # Custom React hooks
│   ├─ data/                     # Training packages data
│   └─ styles/                   # Global CSS
├─ tailwind.config.js            # Tailwind configuration
├─ next-seo.config.js            # SEO defaults
└─ .env.local                    # Environment variables
```

## 📧 Email Setup

The contact form is configured for Camden's iCloud email. **Setup required:**

### iCloud Email Setup (Camden's Account)
1. **Enable 2-Factor Authentication** on your Apple ID
2. **Generate App-Specific Password**:
   - Go to [appleid.apple.com](https://appleid.apple.com)
   - Sign in with camwhite52@icloud.com
   - Go to "App-Specific Passwords"
   - Generate password for "DLB Elite Website"
3. **Update `.env.local`**:
   - Replace `your-app-password` with the generated password
   - Current settings (already configured):
     - `SMTP_HOST=smtp.mail.me.com`
     - `SMTP_PORT=587`
     - `SMTP_USER=camwhite52@icloud.com`

### Alternative Providers (if needed)
- **Gmail**: `smtp.gmail.com:587`
- **Outlook**: `smtp-mail.outlook.com:587`
- **SendGrid**: `smtp.sendgrid.net:587` (business solution)

## 📅 Calendly Integration

✅ **Already configured and working!**

Camden's Calendly is set up at: [https://calendly.com/camwhite52](https://calendly.com/camwhite52)

The booking widget is integrated into:
- Training page (`/training`)
- Contact page footer link
- Main footer direct link

**No action needed** - the integration is ready to accept bookings!

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial DLB Elite website"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in dashboard
   - Deploy automatically

3. **Custom Domain**
   - Purchase domain (e.g., dlbelite.com)
   - Add to Vercel project settings
   - Update DNS records as instructed

### Environment Variables in Vercel

Add these in your Vercel dashboard → Project → Settings → Environment Variables:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_EMAIL`
- `NEXT_PUBLIC_CALENDLY_URL`

## 🎯 Customization

### Training Packages

Edit `src/data/packages.ts` to update:
- Package names and pricing
- Training descriptions
- Age groups and requirements

### Content Updates

- **About Page**: `src/app/about/page.tsx`
- **Mission/Values**: Update content as needed
- **SEO Settings**: `next-seo.config.js`

### Styling

- **Colors**: `tailwind.config.js`
- **Global Styles**: `src/app/globals.css`
- **Animations**: Update Framer Motion settings in components

## 📱 Features Guide

### Hero Section
- Parallax background effect
- Animated logo entrance
- Floating Lottie animation
- Call-to-action button

### Contact Form
- Required field validation
- Email delivery with templates
- Toast notifications
- Package selection dropdown

### Gallery
- Responsive grid layout
- Hover animations
- Optimized image loading

### SEO
- Open Graph meta tags
- Twitter Card support
- Structured data ready
- Sitemap generation

## 🔧 Troubleshooting

### Build Errors
```bash
npm run build
```

### Type Errors
```bash
npm run type-check
```

### Email Not Sending
1. Verify SMTP credentials
2. Check spam folder
3. Test with simple email client
4. Check Vercel function logs

### Images Not Loading
1. Ensure images are in `/public/`
2. Check file extensions match imports
3. Verify image dimensions for optimization

## 📞 Support

For technical questions about this implementation, the codebase includes comprehensive TypeScript types and detailed comments throughout.

---

**"Adversity is the Advantage"** - DLB Elite
