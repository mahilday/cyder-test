'use server';

import { mockMembers } from "@cd/lib/mock-info.data";
import { Member, MemberStats } from "@cd/types/general.type";

let members = [...mockMembers]; 

// Get a member by ID
export async function getMemberDetails(formData: FormData): Promise<Member | null> {
  const id = formData.get('id') as string;
  if (!id) return null;

  const member = members.find((m) => m.id === id);
  return member || null;
}

// Delete a member by ID
export async function deleteMember(formData: FormData): Promise<{ success: boolean }> {
  const id = formData.get('id') as string;
  if (!id) return { success: false };

  members = members.filter((m) => m.id !== id);
  return { success: true };
}



export async function getMemberBreakdown(
  startDate?: string,
  endDate?: string
): Promise<MemberStats[]> {
  return mockMembers.map(({ id, name, transactions }) => {
    let earned = 0;
    let redeemed = 0;

    transactions.forEach((tx) => {
      const txDate = new Date(tx.date);
      if (
        (startDate && txDate < new Date(startDate)) ||
        (endDate && txDate > new Date(endDate))
      ) {
        return;
      }

      if (tx.type === 'earn') earned += tx.points;
      if (tx.type === 'redeem') redeemed += tx.points;
    });

    return {
      id,
      name,
      earned,
      redeemed,
      balance: earned - redeemed,
    };
  });
}