
import { NextResponse } from 'next/server';
import axios from 'axios';

type ImageResponse = {
  url: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;

    if (!prompt) {
      return NextResponse.json({ message: 'Prompt is required' }, { status: 400 });
    }

    const response = await axios.request<ImageResponse>({
      method: 'POST',
      url: 'https://ai-text-to-image-generator-api.p.rapidapi.com/realistic',
      headers: {
        'x-rapidapi-key': process.env.RAPID_API_KEY!,
        'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: {
        inputs: prompt,
      },
    });

    return NextResponse.json({ url: response.data.url }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Image generation error:', error.message);
    } else {
      console.error('Unknown error during image generation:', error);
    }
    return NextResponse.json({ message: 'Image generation failed' }, { status: 500 });
  }
}
