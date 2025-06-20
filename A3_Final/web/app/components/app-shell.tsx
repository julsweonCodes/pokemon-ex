'use client';
import { AppShell, Stack, Group, Text, Tooltip } from '@mantine/core';
import {
  IconBrandGithub,
  IconChartScatter,
  IconSwords,
  IconPokeball,
  IconHome,
  IconTrophy,
  IconTestPipe,
} from '@tabler/icons-react';

import Link from 'next/link';

export default function MainAppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: '6vw',
        breakpoint: 'sm',
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Text size="xl">Pokemon App Team 38 CS6310</Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar
        p="md"
        style={{ backgroundColor: 'var(--mantine-color-blue-5)' }}
      >
        <Stack
          gap="lg"
          h="80vh"
          mt="5vh"
          justify="space-between"
          align="center"
        >
          <NavBarLink label="Go Home" link="/" icon={IconHome} />
          <NavBarLink
            label="View Pokemon"
            link="/pokemon"
            icon={IconPokeball}
          />
          <NavBarLink label="View Battles" link="/battle" icon={IconSwords} />
          <NavBarLink
            label="View Statistics"
            link="/statistics"
            icon={IconChartScatter}
          />
          <NavBarLink
            label="View Tournaments"
            link="/tournaments"
            icon={IconTrophy}
          />
          <NavBarLink
            label="View Performance Tests"
            link="/admin/performance"
            icon={IconTestPipe}
          />
          <NavBarLink
            label="View Our Github"
            link="https://github.gatech.edu/CS6310-Team38/psychic-eureka/tree/main/A3_Final"
            icon={IconBrandGithub}
          />
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

function NavBarLink({
  label,
  link,
  icon: Icon,
}: {
  label: string;
  link: string;
  icon: React.ElementType;
}) {
  return (
    <Tooltip
      label={label}
      style={{
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid black',
      }}
    >
      <Link href={link}>
        <Icon size="30" color="white" className="navBarLink" />
      </Link>
    </Tooltip>
  );
}
