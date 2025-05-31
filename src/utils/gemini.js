export const analyzeCode = async (code) => {
  const response = await fetch('https://codementor-backend.onrender.com/api/review/generate-review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });

  if (!response.ok) {
    throw new Error('Failed to analyze code');
  }

  return response.json();
};
