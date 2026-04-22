import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class CanvasErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Canvas Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#0d0d0d] border border-red-500/20 rounded-xl">
          <div className="text-center p-6">
            <p className="text-red-500 font-mono text-[10px] uppercase tracking-widest mb-2">Graphics Kernel Panic</p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="text-white/40 hover:text-white font-mono text-[8px] uppercase tracking-[0.2em] underline"
            >
              [ Re-initialize WebGL ]
            </button>
          </div>
        </div>
      );
    }

    return this.children;
  }
}

export default CanvasErrorBoundary;
