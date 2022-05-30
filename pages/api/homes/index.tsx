import { NextApiRequest, NextApiResponse } from 'next'
import {homes} from '../../../data'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(homes)
}