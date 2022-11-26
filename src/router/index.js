import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DestinationView from "../views/destination/DestinationView.vue";
import SpaceObjectView from "../views/destination/SpaceObjectView.vue";

import CrewView from "../views/crew/CrewView.vue";
import MemberView from "../views/crew/MemberView.vue";

import TechnologyView from "../views/technology/TechnologyView.vue";
import TechObjectView from "../views/technology/TechObjectView.vue";

import data from "@/data.json";

const routes = [
  {
    path: "/space-tourism/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/space-tourism/destination",
    name: "destination",
    component: DestinationView,
    redirect: `/space-tourism/destination/${data.destinations[0].name}`,
    children: [
      {
        path: ":spaceObject",
        component: SpaceObjectView,
      },
    ],
  },
  {
    path: "/space-tourism/crew",
    name: "crew",
    component: CrewView,
    redirect: `/space-tourism/crew/${data.crew[0].role}`,
    children: [
      {
        path: ":member",
        component: MemberView,
      },
    ],
  },
  {
    path: "/space-tourism/technology",
    name: "technology",
    component: TechnologyView,
    redirect: `/space-tourism/technology/${data.technology[0].name}`,
    children: [
      {
        path: ":techObject",
        component: TechObjectView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
