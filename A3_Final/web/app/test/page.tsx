'use client';

import { Container, Title, Text, Button, Group } from '@mantine/core';
import Link from 'next/link';

export default function TestPage() {
  return (
    <Container>
      <Title order={1} mt="xl">Test Page</Title>
      <Text my="xl">If you can see this page, your Next.js routing is working correctly!</Text>
      
      <Group>
        <Button component={Link} href="/" variant="outline">
          Back to Home
        </Button>
      </Group>
    </Container>
  );
} 