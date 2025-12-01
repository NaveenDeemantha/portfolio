// Test script to verify the backend API is working
// Run this with: node test-api.js

const API_URL = 'http://localhost:3001';

console.log('🧪 Testing Contact Form API...\n');

// Test 1: Health Check
async function testHealthCheck() {
    console.log('1️⃣ Testing health endpoint...');
    try {
        const response = await fetch(`${API_URL}/api/health`);
        const data = await response.json();

        if (response.ok && data.status === 'ok') {
            console.log('   ✅ Health check passed!');
            console.log(`   Response: ${JSON.stringify(data)}\n`);
            return true;
        } else {
            console.log('   ❌ Health check failed!');
            console.log(`   Response: ${JSON.stringify(data)}\n`);
            return false;
        }
    } catch (error) {
        console.log('   ❌ Health check failed!');
        console.log(`   Error: ${error.message}`);
        console.log('   💡 Make sure the backend server is running (cd server && npm run dev)\n');
        return false;
    }
}

// Test 2: Contact Form Validation
async function testValidation() {
    console.log('2️⃣ Testing form validation...');
    try {
        const response = await fetch(`${API_URL}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: '',
                email: '',
                message: '',
            }),
        });
        const data = await response.json();

        if (response.status === 400 && !data.success) {
            console.log('   ✅ Validation working correctly!');
            console.log(`   Response: ${JSON.stringify(data)}\n`);
            return true;
        } else {
            console.log('   ⚠️  Unexpected validation response');
            console.log(`   Response: ${JSON.stringify(data)}\n`);
            return false;
        }
    } catch (error) {
        console.log('   ❌ Validation test failed!');
        console.log(`   Error: ${error.message}\n`);
        return false;
    }
}

// Test 3: Send Test Email
async function testSendEmail() {
    console.log('3️⃣ Testing email sending...');
    console.log('   📧 Attempting to send a test email...');

    try {
        const response = await fetch(`${API_URL}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'Test User',
                email: 'test@example.com',
                message: 'This is a test message from the API test script. If you receive this, your contact form is working perfectly!',
            }),
        });
        const data = await response.json();

        if (response.ok && data.success) {
            console.log('   ✅ Email sent successfully!');
            console.log(`   Response: ${JSON.stringify(data)}`);
            console.log('   📬 Check your email inbox (RECIPIENT_EMAIL from .env)\n');
            return true;
        } else {
            console.log('   ❌ Email sending failed!');
            console.log(`   Response: ${JSON.stringify(data)}`);
            console.log('   💡 Check your Brevo credentials in server/.env\n');
            return false;
        }
    } catch (error) {
        console.log('   ❌ Email sending failed!');
        console.log(`   Error: ${error.message}\n`);
        return false;
    }
}

// Run all tests
async function runTests() {
    console.log('═══════════════════════════════════════════════════\n');

    const healthOk = await testHealthCheck();
    if (!healthOk) {
        console.log('❌ Backend server is not running or not accessible.');
        console.log('💡 Start the server with: cd server && npm run dev\n');
        return;
    }

    const validationOk = await testValidation();
    const emailOk = await testSendEmail();

    console.log('═══════════════════════════════════════════════════');
    console.log('📊 TEST RESULTS:');
    console.log(`   Health Check: ${healthOk ? '✅' : '❌'}`);
    console.log(`   Validation: ${validationOk ? '✅' : '❌'}`);
    console.log(`   Email Sending: ${emailOk ? '✅' : '❌'}`);
    console.log('═══════════════════════════════════════════════════\n');

    if (healthOk && validationOk && emailOk) {
        console.log('🎉 All tests passed! Your contact form is ready to use!\n');
    } else {
        console.log('⚠️  Some tests failed. Check the errors above.\n');
        console.log('📖 See EMAIL_SETUP.md for troubleshooting help.\n');
    }
}

// Run the tests
runTests();
