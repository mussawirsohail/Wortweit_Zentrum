'use client';

import { useSearchParams } from 'next/navigation';
import EnrollmentForm from '@/components/forms/EnrollmentForm';

export default function EnrollmentFormWrapper() {
  const searchParams = useSearchParams();
  const languageParam = searchParams.get('language');
  const levelParam = searchParams.get('level');
  const modeParam = searchParams.get('mode');

  return (
    <EnrollmentForm 
      prefillData={{
        language: languageParam || '',
        level: levelParam || '',
        learningMode: modeParam || 'online'
      }}
    />
  );
}
