'use strict';

const Audit = require('lighthouse').Audit;

const MAX_API_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            id:"card-audit",
            title:"Schedule card initialized and ready",
            failureTitle: 'MyPerformance',
            description: 'Schedule card initialized and ready',
            requiredArtifacts: ['TimeToCard']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToCard;
        const belowThreshold = loadedTime <= MAX_API_TIME;

        return {
            rawValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = LoadAudit;