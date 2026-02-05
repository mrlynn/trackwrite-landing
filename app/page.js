"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BRAND = {
  springGreen: "#00ED64",
  forestGreen: "#00684A",
  evergreen: "#023430",
  slateBlue: "#001E2B",
  mist: "#E3FCF7",
  white: "#FFFFFF",
};

const features = [
  { icon: <DashboardIcon />, title: "Analytics Dashboard", desc: "Real-time charts showing status distribution, content types, team workload, and delivery rates." },
  { icon: <ViewKanbanIcon />, title: "Kanban Board", desc: "Drag-and-drop content through stages. See what's planned, in progress, in review, and delivered." },
  { icon: <AccountTreeIcon />, title: "Org Chart", desc: "Interactive team hierarchy with aggregated content stats. See who owns what at every level." },
  { icon: <CalendarMonthIcon />, title: "Quarterly Calendar", desc: "Visualize content commitments by quarter. Spot gaps and overloaded periods at a glance." },
  { icon: <AssessmentIcon />, title: "PDF Reports", desc: "One-click downloadable reports for stakeholder meetings. Professional, print-ready." },
  { icon: <GroupIcon />, title: "Team Management", desc: "Track individual contributor performance. Capacity planning, workload balancing, and delivery rates." },
  { icon: <EmailIcon />, title: "Magic Link Auth", desc: "No passwords to remember. Team members click a link in their email to sign in instantly." },
  { icon: <LockIcon />, title: "Role-Based Access", desc: "Admins manage everything. Writers see and edit only their own content. Clean separation." },
  { icon: <SpeedIcon />, title: "Sheet Sync", desc: "Import from Google Sheets with conflict detection. Migrate from spreadsheets without losing data." },
];

const plans = [
  { name: "Free", price: "$0", period: "/forever", features: ["5 team members", "50 content items", "1 admin", "Dashboard & board"], cta: "Get Started", highlighted: false },
  { name: "Pro", price: "$29", period: "/month", features: ["25 team members", "Unlimited content", "5 admins", "Reports & PDF export", "Org chart", "Priority support"], cta: "Start Free Trial", highlighted: true },
  { name: "Enterprise", price: "$99", period: "/month", features: ["Unlimited team", "Unlimited content", "Unlimited admins", "SSO / SAML", "API access", "Custom domain", "Dedicated support"], cta: "Contact Sales", highlighted: false },
];

function FeatureCard({ icon, title, desc }) {
  return (
    <Card
      sx={{
        height: "100%",
        bgcolor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(0, 237, 100, 0.1)",
        transition: "all 0.3s",
        "&:hover": {
          borderColor: BRAND.springGreen,
          transform: "translateY(-4px)",
          boxShadow: `0 8px 30px rgba(0, 237, 100, 0.15)`,
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ color: BRAND.springGreen, mb: 2 }}>{icon}</Box>
        <Typography variant="h6" sx={{ fontWeight: 600, color: BRAND.white, mb: 1, fontSize: "1.1rem" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

function PricingCard({ name, price, period, features: planFeatures, cta, highlighted }) {
  return (
    <Card
      sx={{
        height: "100%",
        bgcolor: highlighted ? "rgba(0, 237, 100, 0.05)" : "rgba(255,255,255,0.03)",
        border: highlighted ? `2px solid ${BRAND.springGreen}` : "1px solid rgba(255,255,255,0.1)",
        position: "relative",
        overflow: "visible",
      }}
    >
      {highlighted && (
        <Box
          sx={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: BRAND.springGreen,
            color: BRAND.evergreen,
            px: 2,
            py: 0.5,
            borderRadius: "12px",
            fontSize: "0.75rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Most Popular
        </Box>
      )}
      <CardContent sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: BRAND.white, mb: 1 }}>
          {name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "center", mb: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: BRAND.springGreen }}>
            {price}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)", ml: 0.5 }}>
            {period}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3, textAlign: "left" }}>
          {planFeatures.map((f, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleIcon sx={{ fontSize: 16, color: BRAND.springGreen }} />
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
                {f}
              </Typography>
            </Box>
          ))}
        </Box>
        <Button
          variant={highlighted ? "contained" : "outlined"}
          fullWidth
          href="https://app.trackwrite.io/login"
          sx={{
            py: 1.5,
            fontWeight: 600,
            ...(highlighted
              ? { bgcolor: BRAND.springGreen, color: BRAND.evergreen, "&:hover": { bgcolor: BRAND.forestGreen, color: BRAND.white } }
              : { borderColor: "rgba(255,255,255,0.2)", color: BRAND.white, "&:hover": { borderColor: BRAND.springGreen } }),
          }}
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  );
}

export default function LandingPage() {
  const icpVariants = [
    "built for DevRel",
    "built for Marketing",
    "built for Scale",
    "built for Content Writers",
    "built for Creators",
  ];

  const randomICP = icpVariants[Math.floor(Math.random() * icpVariants.length)];

  return (
    <Box sx={{ bgcolor: BRAND.slateBlue, minHeight: "100vh" }}>
      {/* Nav */}
      <Box
        component="nav"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 3, md: 6 },
          py: 2,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: "1.25rem", color: BRAND.white, letterSpacing: "-0.5px" }}>
          <span style={{ color: BRAND.springGreen }}>Track</span>Write
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button href="#features" sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", display: { xs: "none", md: "inline-flex" } }}>Features</Button>
          <Button href="#pricing" sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", display: { xs: "none", md: "inline-flex" } }}>Pricing</Button>
          <Button
            variant="outlined"
            href="https://app.trackwrite.io/login"
            sx={{ borderColor: BRAND.springGreen, color: BRAND.springGreen, fontSize: "0.85rem", "&:hover": { bgcolor: "rgba(0, 237, 100, 0.1)" } }}
          >
            Sign In
          </Button>
        </Box>
      </Box>

      {/* Hero */}
      <Container maxWidth="md" sx={{ pt: { xs: 8, md: 14 }, pb: { xs: 8, md: 12 }, textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            color: BRAND.white,
            lineHeight: 1.15,
            mb: 3,
            letterSpacing: "-1px",
          }}
        >
          Content tracking{" "}
          <span style={{ color: BRAND.springGreen }}>{randomICP}</span>
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "rgba(255,255,255,0.6)",
            fontWeight: 400,
            fontSize: { xs: "1.1rem", md: "1.35rem" },
            lineHeight: 1.6,
            mb: 5,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Track commitments, measure delivery, and keep your Developer Relations team
          accountable — without drowning in spreadsheets.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button
            variant="contained"
            size="large"
            href="https://app.trackwrite.io/login"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: BRAND.springGreen,
              color: BRAND.evergreen,
              fontWeight: 600,
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              "&:hover": { bgcolor: BRAND.forestGreen, color: BRAND.white },
            }}
          >
            Get Started Free
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="#features"
            sx={{
              borderColor: "rgba(255,255,255,0.2)",
              color: BRAND.white,
              fontWeight: 600,
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              "&:hover": { borderColor: BRAND.springGreen },
            }}
          >
            See Features
          </Button>
        </Box>
      </Container>

      {/* Social proof bar */}
      <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", py: 4 }}>
        <Container maxWidth="md">
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.4)", textAlign: "center", fontSize: "0.85rem" }}>
            Purpose-built for teams at companies like MongoDB, Stripe, Twilio, Datadog, and Elastic
          </Typography>
        </Container>
      </Box>

      {/* Features */}
      <Box id="features" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, color: BRAND.white, textAlign: "center", mb: 2, fontSize: { xs: "1.8rem", md: "2.2rem" } }}>
            Everything your team needs
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.5)", textAlign: "center", mb: 6, maxWidth: 500, mx: "auto" }}>
            From planning to delivery — track every piece of content your DevRel team creates.
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Pricing */}
      <Box id="pricing" sx={{ py: { xs: 8, md: 12 }, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, color: BRAND.white, textAlign: "center", mb: 2, fontSize: { xs: "1.8rem", md: "2.2rem" } }}>
            Simple pricing
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.5)", textAlign: "center", mb: 6 }}>
            Start free. Upgrade when you need more.
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 3,
              maxWidth: 900,
              mx: "auto",
            }}
          >
            {plans.map((p, i) => (
              <PricingCard key={i} {...p} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 8, md: 10 }, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: BRAND.white, mb: 2, fontSize: { xs: "1.5rem", md: "2rem" } }}>
            Stop tracking content in spreadsheets
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.5)", mb: 4 }}>
            Your DevRel team deserves better tooling. Get started in under 2 minutes.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="https://app.trackwrite.io/login"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: BRAND.springGreen,
              color: BRAND.evergreen,
              fontWeight: 600,
              px: 5,
              py: 1.5,
              fontSize: "1rem",
              "&:hover": { bgcolor: BRAND.forestGreen, color: BRAND.white },
            }}
          >
            Get Started Free
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.06)", py: 4, px: 3 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.3)" }}>
              © 2026 TrackWrite. All rights reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Typography component="a" href="mailto:hello@trackwrite.io" variant="body2" sx={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", "&:hover": { color: BRAND.springGreen } }}>
                Contact
              </Typography>
              <Typography component="a" href="#" variant="body2" sx={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", "&:hover": { color: BRAND.springGreen } }}>
                Privacy
              </Typography>
              <Typography component="a" href="#" variant="body2" sx={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", "&:hover": { color: BRAND.springGreen } }}>
                Terms
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
