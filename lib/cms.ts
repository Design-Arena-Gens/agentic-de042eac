import { roadmap } from "../data/roadmap";
import { homeModules } from "../data/modules";
import { experienceHighlights } from "../data/features";
import { techStack } from "../data/stack";
import { seoHighlights, securityPractices, versionTwoIdeas } from "../data/seo";
import { dataModel } from "../data/model";
import { assetStrategy } from "../data/assets";

export function getRoadmap() {
  return roadmap;
}

export function getHomeModules() {
  return homeModules;
}

export function getExperiences() {
  return experienceHighlights;
}

export function getTechStack() {
  return techStack;
}

export function getSeoPlan() {
  return { seoHighlights, securityPractices };
}

export function getDataModel() {
  return dataModel;
}

export function getAssetStrategy() {
  return assetStrategy;
}

export function getVersionTwoIdeas() {
  return versionTwoIdeas;
}
