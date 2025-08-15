use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    token::{self, Mint, Token, TokenAccount, Transfer},
};

pub fn withdraw(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
    require!(amount > 0, DefiError::InvalidAmount);

    let user = &mut ctx.accounts.user_state;
    require_keys_eq!(
        user.authority,
        ctx.accounts.authority.key(),
        DefiError::InvalidAuthority
    );
    require!(user.balance >= amount, DefiError::InsufficientBalance);

    let seeds: &[&[u8]] = &[
        b"vault-auth",
        ctx.accounts.mint.key().as_ref(),
        &[ctx.accounts.vault_auth_bump],
    ]
}
