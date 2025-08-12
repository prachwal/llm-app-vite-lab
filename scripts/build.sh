#!/bin/bash
set -e  # Exit on any error

echo "🚀 Starting professional build process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${BLUE}==>${NC} ${1}"
}

print_success() {
    echo -e "${GREEN}✅${NC} ${1}"
}

print_warning() {
    echo -e "${YELLOW}⚠️${NC} ${1}"
}

print_error() {
    echo -e "${RED}❌${NC} ${1}"
}

# Clean previous builds
print_step "Cleaning previous builds..."
rm -rf dist/ public/docs/ public/storybook/
mkdir -p public/docs public/storybook
print_success "Cleaned build directories"

# Step 1: Run tests
print_step "Step 1: Running tests..."
npm run test:run
if [ $? -eq 0 ]; then
    print_success "All tests passed"
else
    print_error "Tests failed - aborting build"
    exit 1
fi

# Step 2: Lint code
print_step "Step 2: Linting code..."
npm run lint
if [ $? -eq 0 ]; then
    print_success "Code linting passed"
else
    print_error "Linting failed - aborting build"
    exit 1
fi

# Step 3: Build documentation
print_step "Step 3: Building documentation..."
npm run docs
if [ $? -eq 0 ]; then
    print_success "Documentation built successfully"
else
    print_warning "Documentation build had issues - continuing..."
fi

# Step 4: Build Storybook
print_step "Step 4: Building Storybook..."
if command -v npx storybook build &> /dev/null; then
    npx storybook build -o public/storybook
    if [ $? -eq 0 ]; then
        print_success "Storybook built successfully"
    else
        print_warning "Storybook build failed - continuing..."
    fi
else
    print_warning "Storybook not configured - skipping..."
fi

# Step 5: Build main application
print_step "Step 5: Building main application..."
npm run build
if [ $? -eq 0 ]; then
    print_success "Application built successfully"
else
    print_error "Application build failed"
    exit 1
fi

# Copy documentation and storybook to dist for deployment
if [ -d "public/docs" ]; then
    cp -r public/docs dist/
    print_success "Documentation copied to dist/"
fi

if [ -d "public/storybook" ]; then
    cp -r public/storybook dist/
    print_success "Storybook copied to dist/"
fi

print_success "🎉 Build process completed successfully!"
print_step "Built artifacts:"
echo "  📦 Application: dist/"
echo "  📚 Documentation: dist/docs/"
echo "  📖 Storybook: dist/storybook/"
