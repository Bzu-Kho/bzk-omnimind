#!/bin/bash
# Deploy script for BZK Omnimind Corporation™

echo "🚀 Deploying BZK Omnimind Corporation™ to GitHub Pages..."

# Add all changes
git add .

# Commit with timestamp
git commit -m "Update BZK Omnimind site - $(date)"

# Push to GitHub
git push origin main

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at: https://YOUR_USERNAME.github.io/bzk-omnimind/"
echo "🌐 Custom domain (after DNS): https://bzk-omnimind.com"

# Check if CNAME exists
if [ -f "CNAME" ]; then
    echo "✅ CNAME file configured for custom domain"
else
    echo "❌ CNAME file missing - custom domain won't work"
fi

echo ""
echo "📋 Next steps:"
echo "1. Buy domain: bzk-omnimind.com at namecheap.com"
echo "2. Configure DNS records (see instructions)"
echo "3. Enable GitHub Pages in repository settings"
echo "4. Add custom domain in GitHub Pages settings"