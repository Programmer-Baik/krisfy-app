use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    token::{self, Mint, Token, TokenAccount, Transfer},
};

pub fn init_vault(ctx: Context<InitVault>) -> Result<()> {
    Ok(())
}
