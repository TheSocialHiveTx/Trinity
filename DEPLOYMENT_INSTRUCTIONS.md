
# Trinity Audio Concepts - Deployment Instructions

This project is built as a modern React application. Follow these steps to host it as a static site.

## Option 1: Netlify (Drag & Drop)

1. **Build the Project**: Run the build command in your local environment:
   ```bash
   npm run build
   ```
2. **Drag & Drop**: Open your [Netlify Dashboard](https://app.netlify.com/). Locate the "Drag and drop your site folder here" section.
3. **Upload**: Drag the `dist` (or `build`) folder from your local directory into that box.
4. **Forms Support**: Netlify will automatically detect the `data-netlify="true"` attributes in the build form. You can view submissions in your Netlify site dashboard under "Forms".

## Option 2: Netlify (Git Integration - Recommended)

1. Push this code to a GitHub/GitLab/Bitbucket repository.
2. Link your Netlify account to the repository.
3. Set the build command to `npm run build`.
4. Set the publish directory to `dist`.
5. Netlify will rebuild the site automatically every time you push changes.

## Custom Domain Setup

1. In your Netlify site settings, go to **Domain management**.
2. Click **Add custom domain**.
3. Enter your domain (e.g., `trinityaudioconcepts.com`).
4. Update your DNS settings (usually adding a CNAME record or changing Nameservers) as instructed by Netlify.

## Notes on Forms
- The "Start a Build" form and "Contact" form are both set up for **Netlify Forms**.
- No server-side code is required for these forms to work.
- Ensure you test the form submission once live to verify the "Thank You" redirect works as expected.
