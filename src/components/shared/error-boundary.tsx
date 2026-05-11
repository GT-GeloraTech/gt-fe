"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  override state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, info: ErrorInfo): void {
    // Hook into Sentry/Datadog here when wired.
    console.error("ErrorBoundary captured:", error, info);
  }

  override render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div
            role="alert"
            className="flex min-h-[40vh] flex-col items-center justify-center gap-2 p-8 text-center"
          >
            <h2 className="text-lg font-semibold">Something went wrong.</h2>
            <p className="text-sm text-gray-600">
              The error has been logged. Please refresh and try again.
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
