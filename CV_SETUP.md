# CV/Resume Setup Instructions

## How to Add Your CV to the Portfolio

### Option 1: Add PDF File (Recommended)
1. Place your CV PDF file in the `public` folder
2. Rename it to `cv.pdf`
3. The path should be: `public/cv.pdf`
4. The buttons will automatically work!

### Option 2: Use External Link
If you host your CV elsewhere (Google Drive, Dropbox, etc.):

1. Open `src/components/HeroSection.jsx`
2. Find the CV card section (around line 110)
3. Replace `/cv.pdf` with your external URL:
   ```jsx
   href="https://your-link-here.com/cv.pdf"
   ```

### Option 3: Use Google Drive
1. Upload CV to Google Drive
2. Right-click → Share → Anyone with the link can view
3. Get the shareable link
4. Convert it to direct download link:
   - Original: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
   - Direct: `https://drive.google.com/uc?export=download&id=FILE_ID`
5. Use the direct link in the code

### File Format Recommendations
- **PDF** (recommended) - Universal, professional
- **Max size**: 2-3 MB for fast loading
- **Filename**: `Naveen_Deemantha_CV.pdf` (when downloaded)

### Testing
1. Click "View CV" - Should open in new tab
2. Click "Download" - Should download with your name
3. Check on mobile devices too!

## Current Setup
- View button: Opens `/cv.pdf` in new tab
- Download button: Downloads as `Naveen_Deemantha_CV.pdf`
- Both buttons have icons and hover effects
- Responsive design for mobile and desktop
