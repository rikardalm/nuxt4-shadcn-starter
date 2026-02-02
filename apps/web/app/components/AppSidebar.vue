<script setup lang="ts">
import { Briefcase, Frame, Map, PieChart, SquareTerminal } from "lucide-vue-next"
import NavMain from '@/components/NavMain.vue'
import NavProjects from '@/components/NavProjects.vue'
import NavUser from '@/components/NavUser.vue'
import TeamSwitcher from '@/components/TeamSwitcher.vue'
import type { SidebarProps } from '@/components/ui/sidebar'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
})

// Demonstration data kept intentionally lean for template use.
const data = {
  user: {
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Product Team",
      logo: SquareTerminal,
      plan: "Pro",
    },
    {
      name: "Marketing",
      logo: PieChart,
      plan: "Standard",
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Activity",
          url: "#",
        },
      ],
    },
    {
      title: "Workspace",
      url: "#",
      icon: Briefcase,
      items: [
        {
          title: "Projects",
          url: "#",
        },
        {
          title: "Tasks",
          url: "#",
        },
      ],
    },
    {
      title: "Reporting",
      url: "#",
      icon: PieChart,
      items: [
        {
          title: "Performance",
          url: "#",
        },
        {
          title: "Exports",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Website Refresh",
      url: "#",
      icon: Frame,
    },
    {
      name: "Mobile App",
      url: "#",
      icon: Map,
    },
  ],
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
      <NavProjects :projects="data.projects" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
