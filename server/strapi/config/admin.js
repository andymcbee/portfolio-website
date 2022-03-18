module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1005361057a0d28005967187c5c969af'),
  },
});
