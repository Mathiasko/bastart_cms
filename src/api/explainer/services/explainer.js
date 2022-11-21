'use strict';

/**
 * explainer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::explainer.explainer');
