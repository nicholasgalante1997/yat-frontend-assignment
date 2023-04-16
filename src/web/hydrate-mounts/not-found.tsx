import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { NotFound404Page } from '../pages/404';

function mount404Page() {
  hydrateRoot(
    document.getElementById('production-root')!,
    <NotFound404Page />
  );
}

mount404Page();