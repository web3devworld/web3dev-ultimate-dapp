const express = require('express');
const router = express.Router();

// Mock data for governance (replace with real blockchain integration)
let governanceData = {
    proposals: [
        { id: 1, title: "Proposal 1: Increase Staking Rewards", votes: 150 },
        { id: 2, title: "Proposal 2: Add New NFT Collection", votes: 75 },
    ],
};

// GET /api/governance/proposals
// Fetch all governance proposals
router.get('/proposals', (req, res) => {
    res.json({
        success: true,
        data: governanceData.proposals,
    });
});

// POST /api/governance/proposals
// Create a new governance proposal
router.post('/proposals', (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ success: false, message: "Proposal title is required." });
    }

    const newProposal = {
        id: governanceData.proposals.length + 1,
        title,
        votes: 0,
    };

    governanceData.proposals.push(newProposal);

    res.status(201).json({
        success: true,
        message: "Proposal created successfully.",
        data: newProposal,
    });
});

// POST /api/governance/vote
// Cast a vote for a specific proposal
router.post('/vote', (req, res) => {
    const { proposalId } = req.body;

    if (!proposalId) {
        return res.status(400).json({ success: false, message: "Proposal ID is required." });
    }

    const proposal = governanceData.proposals.find((p) => p.id === proposalId);

    if (!proposal) {
        return res.status(404).json({ success: false, message: "Proposal not found." });
    }

    proposal.votes += 1;

    res.json({
        success: true,
        message: "Vote cast successfully.",
        data: proposal,
    });
});

module.exports = router;