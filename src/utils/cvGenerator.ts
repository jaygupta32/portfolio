/**
 * CV Downloader Utility for Jay Gupta's Portfolio
 * Downloads the exact PDF file placed at /public/Jay-Gupta-CV.pdf.
 * Does NOT generate, design, or recreate any CV file.
 */

export const downloadJayGuptaCV = async (): Promise<void> => {
  const cvPath = '/Jay-Gupta-CV.pdf';
  const fileName = 'Jay-Gupta-CV.pdf';

  try {
    // Check if CV file exists in public directory
    const response = await fetch(cvPath, { method: 'HEAD' });
    const contentType = response.headers.get('content-type') || '';

    // In Vite SPA dev mode, missing file returns 404 or falls back to HTML (text/html)
    if (!response.ok || contentType.includes('text/html')) {
      const errorMsg = 'CV file not found. Please add Jay-Gupta-CV.pdf to the public folder.';
      alert(errorMsg);
      console.error(errorMsg);
      return;
    }

    // Trigger browser download of actual public file
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error('Failed to access CV file:', err);
    // Fallback standard download attempt
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

/**
 * Checks if the CV file exists at /Jay-Gupta-CV.pdf
 */
export const checkCvFileExists = async (): Promise<boolean> => {
  try {
    const response = await fetch('/Jay-Gupta-CV.pdf', { method: 'HEAD' });
    const contentType = response.headers.get('content-type') || '';
    return response.ok && !contentType.includes('text/html');
  } catch {
    return false;
  }
};

/**
 * Safe image data helper kept for backwards compatibility if needed.
 */
export const getSafeImageDataUrl = async (url: string): Promise<string> => {
  if (!url) return '';
  return url;
};
