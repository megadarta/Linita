const baseSchema = {
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
};

module.exports = { baseSchema };