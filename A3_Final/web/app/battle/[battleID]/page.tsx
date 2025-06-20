import { Text, Stack } from '@mantine/core';

export default async function Page({
  params,
}: {
  params: Promise<{ battleID: string }>;
}) {
  const { battleID } = await params;

  return (
    <Stack>
      <Text>This would be the information for battle {battleID}</Text>
      IE: Bulbasaur won
    </Stack>
  );
}
