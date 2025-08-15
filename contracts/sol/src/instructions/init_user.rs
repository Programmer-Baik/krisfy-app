use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    token::{self, Mint, Token, TokenAccount, Transfer},
};

pub fn init_user(ctx: Context<InitUser>) -> Result<()> {
    let user = &mut ctx.accounts.user_state;
    user.authority = ctx.accounts.authority.key();
    user.bump = *ctx.bumps.get("user_state").unwrap();
    user.balance = 0;
    Ok(())
}
