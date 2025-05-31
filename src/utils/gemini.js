export const analyzeCode = async (code) => {
  const response = await fetch('http://localhost:5000/api/review/generate-review', {
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