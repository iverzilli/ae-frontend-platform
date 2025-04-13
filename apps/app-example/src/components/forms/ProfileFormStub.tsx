'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { t } from '@ae/utils-ae';

// Definizione dello schema Zod per la validazione del form
const profileFormSchema = z.object({
  name: z.string()
    .min(2, { message: t('form.profile.name.minLength') })
    .max(50, { message: t('form.profile.name.maxLength') }),
  email: z.string()
    .email({ message: t('form.profile.email.invalid') })
    .min(5, { message: t('form.profile.email.minLength') })
    .max(100, { message: t('form.profile.email.maxLength') }),
  codiceFiscale: z.string()
    .regex(/^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/, { 
      message: t('form.profile.codiceFiscale.invalid') 
    })
    .optional()
    .or(z.literal('')),
});

// Tipo TypeScript derivato dallo schema Zod
type ProfileFormData = z.infer<typeof profileFormSchema>;

/**
 * Componente di esempio che dimostra l'integrazione di React Hook Form con Zod
 * per la validazione dei dati in un form di profilo utente.
 */
export default function ProfileFormStub() {
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState<ProfileFormData | null>(null);

  // Inizializzazione di useForm con zodResolver per la validazione
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: '',
      email: '',
      codiceFiscale: '',
    },
  });

  // Funzione di gestione del submit del form
  const onSubmit = (data: ProfileFormData) => {
    console.log('Form inviato con successo:', data);
    setFormData(data);
    setFormSuccess(true);
    // In un'applicazione reale, qui si invierebbe una richiesta API
    // reset(); // Decommentare per resettare il form dopo l'invio
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{t('form.profile.title')}</h2>
      
      {formSuccess && formData && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
          <p className="font-medium">{t('form.profile.success')}</p>
          <pre className="mt-2 text-sm bg-gray-50 p-2 rounded overflow-x-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
          <button 
            type="button"
            onClick={() => setFormSuccess(false)}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            {t('common.close')}
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Campo Nome */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.profile.name.label')} *
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('form.profile.name.placeholder')}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Campo Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.profile.email.label')} *
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('form.profile.email.placeholder')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Campo Codice Fiscale (opzionale) */}
        <div>
          <label htmlFor="codiceFiscale" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.profile.codiceFiscale.optional')}
          </label>
          <input
            id="codiceFiscale"
            type="text"
            {...register('codiceFiscale')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('form.profile.codiceFiscale.placeholder')}
          />
          {errors.codiceFiscale && (
            <p className="mt-1 text-sm text-red-600">{errors.codiceFiscale.message}</p>
          )}
        </div>

        {/* Pulsante di invio */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? t('form.profile.submitting') : t('form.profile.submit')}
          </button>
        </div>
      </form>
    </div>
  );
}