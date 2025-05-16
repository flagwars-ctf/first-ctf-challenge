import { Router } from "express";
import { getBlock } from "../services/rpc-service";

const blockchainRouter = Router();

/**
 * @swagger
 * /block:
 *   get:
 *     summary: Retrieve a blockchain block by its number
 *     description: Fetches a specific block from the blockchain using the provided block number.
 *     parameters:
 *       - in: query
 *         name: blockNumber
 *         required: true
 *         description: The number of the block to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved the block.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 block:
 *                   type: object
 *                   description: The blockchain block data.
 *       400:
 *         description: Invalid block number provided.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid block number
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
blockchainRouter.get("/block", async (req, res) => {
  try {
    const { blockNumber } = req.query;
    if (!blockNumber) {
      res.status(400).json({
        message: "Invalid block number",
      });

      return;
    }

    const num = parseInt(blockNumber as string);

    const block = await getBlock(num);
    res.status(200).json({
      block: block,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

export default blockchainRouter;
