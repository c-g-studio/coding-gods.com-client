/* eslint-disable sonarjs/no-nested-functions */
'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Checkbox,
} from '@headlessui/react';

import { Typography } from '@/components/ui/Typography/Typography';

export const CalculatorForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<Record<string, unknown>>({
    defaultValues: {
      siteType: 'landing',
      siteFunctionalities: [],
    },
    mode: 'onChange',
    // resolver: zodResolver(schema),
  });

  const handleFormSubmit = (data: Record<string, unknown>) => {
    console.info('data', data);
  };

  const siteTypes = [
    {
      value: 'landing',
      label: 'Landing Page',
    },
    {
      value: 'online-store',
      label: 'Інтернет-магазин',
    },
    {
      value: 'web-app',
      label: 'Веб-додаток',
    },
    {
      value: 'portfolio',
      label: 'Сайт-візитівка (до 5 сторінок)',
    },
    {
      value: 'redesign',
      label: 'Редизайн сайту (залежно від обсягу робіт та складності завдань)',
    },
    {
      value: 'corporate',
      label: 'Корпоративний сайт (до 10 сторінок)',
    },
    {
      value: 'custom',
      label:
        'Доопрацювання сайту (залежно від обсягу робіт та складності завдань)',
    },
    {
      value: 'portal',
      label: 'Портал або SaaS-сервіс',
    },
  ];

  const siteFunctionalities = [
    {
      value: 'adaptive',
      label: 'Адаптивний дизайн',
    },
    {
      value: 'seo',
      label: 'SEO-оптимізація',
    },
    {
      value: 'analytics',
      label: 'Настройка аналітики',
    },
    {
      value: 'crm',
      label: 'CRM-інтеграція',
    },
    {
      value: 'payment',
      label: 'Інтеграція платіжних систем',
    },
    {
      value: 'social',
      label: 'Інтеграція з соцмережами',
    },
    {
      value: 'chat',
      label: 'Чат-бот',
    },
    {
      value: 'blog',
      label: 'Блог',
    },
    {
      value: 'forum',
      label: 'Форум',
    },
    {
      value: 'multilang',
      label: 'Мультиязичність',
    },
    {
      value: 'other',
      label: 'Інше',
    },
  ];

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Fieldset className="w-full space-y-8">
        <Legend className="mx-auto mb-12 max-w-2xl space-y-6 text-balance text-center">
          <Typography variant="h2" className="mb-0 lg:mb-0">
            Калькулятор ціни
          </Typography>
          <Typography>
            Наш калькулятор допоможе вам швидко дізнатися орієнтовну вартість
            розробки сайту. Просто виконайте кілька кроків
          </Typography>
        </Legend>

        {/* Site types */}
        <Field className="space-y-4">
          <Description className="font-inter text-xs font-normal text-orange-450 md:text-sm">
            Оберіть тип сайту:
          </Description>

          {siteTypes.map(type => (
            <Controller
              key={type.value}
              control={control}
              name="siteType"
              render={({ field }) => (
                <Label
                  className="flex cursor-pointer items-center space-x-2 pl-6"
                  htmlFor={type.value}
                >
                  <Input
                    {...field}
                    type="radio"
                    value={type.value}
                    checked={field.value === type.value}
                    className="size-5 text-orange-450"
                    onChange={field.onChange}
                    id={type.value}
                  />
                  <Typography>{type.label}</Typography>
                </Label>
              )}
            />
          ))}
        </Field>

        {/* Functionality */}
        <Field className="space-y-4">
          <Description className="font-inter text-xs font-normal text-orange-450 md:text-sm">
            Функціональність
          </Description>

          {siteFunctionalities.map(type => (
            <Controller
              key={type.value}
              control={control}
              name="siteFunctionalities"
              render={({ field }) => {
                const values = (field.value as string[]) || [];
                return (
                  <Label
                    className="flex cursor-pointer items-center space-x-2 pl-6"
                    htmlFor={type.value}
                  >
                    <Checkbox
                      checked={values.includes(type.value)}
                      onChange={checked => {
                        const updatedValues = checked
                          ? [...values, type.value]
                          : values.filter(value => value !== type.value);
                        field.onChange(updatedValues);
                      }}
                      id={type.value}
                      className="group size-5 rounded-md bg-white/10 p-1 ring-1 ring-inset ring-white/15 data-[checked]:bg-orange-450"
                    />
                    <Typography>{type.label}</Typography>
                  </Label>
                );
              }}
            />
          ))}
        </Field>

        <Button type="submit" className="defaultButton" disabled={isSubmitting}>
          {isSubmitting ? 'Надсилаємо...' : 'Надіслати заявку'}
        </Button>
      </Fieldset>
    </form>
  );
};
